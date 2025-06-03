import { Entity } from '@backstage/catalog-model';
import {
  EntityProvider,
  EntityProviderConnection,
} from '@backstage/plugin-catalog-node';
import {
  SchedulerServiceTaskRunner,
  AuthService,
} from '@backstage/backend-plugin-api';
import { Config } from '@backstage/config';

interface HetznerServer {
  id: number;
  name: string;
  public_net: {
    ipv4: {
      ip: string;
      dns_ptr: string;
    };
  };
  status: string;
  created: string;
  datacenter: {
    name: string;
    description: string;
    location: {
      city: string;
      country: string;
    };
  };
  server_type: {
    name: string;
    description: string;
    cores: number;
    memory: number;
    disk: number;
  };
  image: {
    name: string;
    description: string;
    os_flavor: string;
    os_version: string;
  };
  outgoing_traffic: number;
  ingoing_traffic: number;
  included_traffic: number;
}

interface HetznerVolume {
  id: number;
  name: string;
  size: number;
  location: {
    name: string;
    description: string;
  };
  created: string;
}

interface HetznerPrimaryIP {
  name: string;
  id: number;
  ip: string;
  type: string;
  server: number | null;
  created: string;
}

/**
 * Provides entities from Hetzner Cloud.
 */
export class HetznerProvider implements EntityProvider {
  private readonly baseUrl: string | undefined;
  private connection?: EntityProviderConnection;
  private readonly taskRunner: SchedulerServiceTaskRunner;
  private readonly auth: AuthService;

  constructor(
    taskRunner: SchedulerServiceTaskRunner,
    config: Config,
    auth: AuthService
  ) {
    console.log('HetznerProvider constructor called');
    this.taskRunner = taskRunner;
    this.baseUrl = config.getOptionalString('backend.baseUrl');
    this.auth = auth;
  }

  getProviderName(): string {
    return 'hetzner-resource-provider';
  }

  async connect(connection: EntityProviderConnection): Promise<void> {
    this.connection = connection;
    await this.taskRunner.run({
      id: this.getProviderName(),
      fn: async () => {
        await this.run();
      },
    });
  }

  async run(): Promise<void> {
    if (!this.connection) {
      throw new Error('Not initialized');
    }

    console.log('Starting Hetzner Cloud entity run...');

    const { token } = await this.auth.getPluginRequestToken({
      onBehalfOf: await this.auth.getOwnServiceCredentials(),
      targetPluginId: 'hetzner',
    });

    if (!token) {
      throw new Error('Failed to retrieve authentication token');
    }

    // Fetch and map servers
    const serverEntities = await this.fetchAndMapEntities<HetznerServer>(
      `${this.baseUrl}/api/hetzner/servers`,
      token,
      this.mapServerToEntity
    );

    // Fetch and map volumes
    const volumeEntities = await this.fetchAndMapEntities<HetznerVolume>(
      `${this.baseUrl}/api/hetzner/volumes`,
      token,
      this.mapVolumeToEntity
    );

    // Fetch and map primary IPs
    const primaryIPEntities = await this.fetchAndMapEntities<HetznerPrimaryIP>(
      `${this.baseUrl}/api/hetzner/primary_ips`,
      token,
      this.mapPrimaryIPToEntity
    );

    // Combine all entities
    const allEntities = [
      ...serverEntities,
      ...volumeEntities,
      ...primaryIPEntities,
    ];

    console.log(
      `Prepared ${allEntities.length} entities for catalog ingestion.`
    );

    try {
      await this.connection.applyMutation({
        type: 'full',
        entities: allEntities.map((entity) => ({
          entity,
          locationKey: 'hetzner-provider',
        })),
      });
      console.log('Entities successfully applied to catalog.');
    } catch (err) {
      console.error('Error applying entities:', err);
    }

    console.log('Hetzner entity run completed.');
  }

  private async fetchAndMapEntities<T>(
    apiUrl: string,
    token: string,
    mapFn: (data: T) => Entity
  ): Promise<Entity[]> {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from ${apiUrl}: ${response.statusText}`
      );
    }

    const data = (await response.json()) as T[];

    if (!Array.isArray(data)) {
      throw new Error(`Invalid API response from ${apiUrl}: Expected an array`);
    }

    console.log(`Fetched ${data.length} items from ${apiUrl}.`);

    return data.map(mapFn);
  }

  private mapServerToEntity(server: HetznerServer): Entity {
    console.log('Mapping server to entity:', server);
    return {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'Resource',
      metadata: {
        name: server.name,
        description: `This ${server.server_type.name} is located in ${server.datacenter.name}`,
        annotations: {
          'backstage.io/managed-by-location': 'url:hetzner-provider',
          'backstage.io/managed-by-origin-location': `url:baseurl/api/hetzner/servers/${server.id}`,
          'hetzner.com/data': JSON.stringify(server),
        },
      },
      spec: {
        type: 'virtual-machine',
        lifecycle: 'production',
        owner: 'Gluo NV',
      },
    };
  }

  private mapVolumeToEntity(volume: HetznerVolume): Entity {
    console.log('Mapping volume to entity:', volume);
    return {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'Resource',
      metadata: {
        name: volume.name,
        description: `Volume of size ${volume.size}GB.`,
        annotations: {
          'backstage.io/managed-by-location': 'url:hetzner-provider',
          'backstage.io/managed-by-origin-location': `url:baseurl/api/hetzner/volumes/${volume.id}`,
          'hetzner.com/data': JSON.stringify(volume),
        },
      },
      spec: {
        type: 'storage',
        lifecycle: 'production',
        owner: 'Gluo NV',
      },
    };
  }

  private mapPrimaryIPToEntity(primaryIP: HetznerPrimaryIP): Entity {
    console.log('Mapping primary IP to entity:', primaryIP);

    return {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'Resource',
      metadata: {
        name: `primary_ip-${primaryIP.id}`,
        description: `Primary IP ${primaryIP.ip} (${primaryIP.type})`,
        annotations: {
          'backstage.io/managed-by-location': 'url:hetzner-provider',
          'backstage.io/managed-by-origin-location': `url:baseurl/api/hetzner/primary-ips/${primaryIP.id}`,
          'hetzner.com/data': JSON.stringify(primaryIP),
        },
      },
      spec: {
        type: 'network',
        lifecycle: 'production',
        owner: 'Gluo NV',
      },
    };
  }
}
