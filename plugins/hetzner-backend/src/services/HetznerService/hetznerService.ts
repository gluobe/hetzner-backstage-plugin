import { LoggerService } from '@backstage/backend-plugin-api';
import { HetznerService } from './types';
import { ServersService } from '../../hetznerClient/services/ServersService';
import { VolumesService } from '../../hetznerClient/services/VolumesService';
import { PrimaryIPsService } from '../../hetznerClient/services/PrimaryIPsService';
import { OpenAPI } from '../../hetznerClient/core/OpenAPI';

async function getAllResources<T>(
  tokens: string[],
  serviceMethod: Promise<{ [key: string]: T[] }>,
  resourceKey: string,
): Promise<T[]> {
  const resources: T[] = [];
  for (const token of tokens) {
    OpenAPI.TOKEN = token;
    const result = await serviceMethod();
    if (result && Array.isArray(result[resourceKey])) {
      resources.push(...result[resourceKey]);
    }
  }
  return resources;
}

export async function createHetznerService({
  logger,
  tokens,
}: {
  logger: LoggerService;
  tokens: string[];
}): Promise<HetznerService> {
  logger.info('Initializing hetznerService');

  return {
    async getOverview() {
      const totalServers = (
        await getAllResources<Server>(
          tokens,
          () => ServersService.getServers(),
          'servers',
        )
      ).length;
      const totalVolumes = (
        await getAllResources<Volume>(
          tokens,
          () => VolumesService.getVolumes(),
          'volumes',
        )
      ).length;
      const totalPrimaryIps = (
        await getAllResources<PrimaryIp>(
          tokens,
          () => PrimaryIPsService.getPrimaryIps(),
          'primary_ips',
        )
      ).length;
      return { totalServers, totalVolumes, totalPrimaryIps };
    },

    async getServers() {
      const servers = await getAllResources<Server>(
        tokens,
        () => ServersService.getServers(),
        'servers',
      );
      return servers.map(server => ({
        id: server.id.toString(),
        name: server.name,
        status: server.status,
        created: server.created,
        public_net: {
          ipv4: {
            ip: server.public_net?.ipv4?.ip || null,
            dns_ptr: server.public_net?.ipv4?.dns_ptr || null,
          },
        },
        datacenter: {
          name: server.datacenter.name,
          description: server.datacenter.description,
          location: {
            city: server.datacenter.location.city,
            country: server.datacenter.location.country,
          },
        },
        server_type: {
          name: server.server_type.name,
          description: server.server_type.description,
          cores: server.server_type.cores,
          architecture: server.server_type.architecture,
          memory: server.server_type.memory,
          disk: server.server_type.disk,
        },
        image: {
          name: server.image?.name || null,
          description: server.image?.description || null,
          os_flavor: server.image?.os_flavor || null,
          os_version: server.image?.os_version || null,
        },
        outgoing_traffic: server.outgoing_traffic || null,
        ingoing_traffic: server.ingoing_traffic || null,
        included_traffic: server.included_traffic || null,
        resource_type: 'virtual_machine',
      }));
    },

    async getVolumes() {
      const volumes = await getAllResources<Volume>(
        tokens,
        () => VolumesService.getVolumes(),
        'volumes',
      );
      return volumes.map(volume => ({
        id: volume.id.toString(),
        name: volume.name,
        size: volume.size,
        status: volume.status,
        created: volume.created,
        server: volume.server,
        resource_type: 'volume',
      }));
    },

    async getPrimaryIps() {
      const primaryIps = await getAllResources<Volume>(
        tokens,
        () => PrimaryIPsService.getPrimaryIps(),
        'primary_ips',
      );
      return primaryIps.map(primaryIp => ({
        id: primaryIp.id.toString(),
        name: primaryIp.name,
        server: primaryIp.assignee_type,
        ip: primaryIp.ip,
        type: primaryIp.type,
        created: primaryIp.created,
        resource_type: 'primary_ip',
      }));
    },
  };
}
