import { EntityProvider, EntityProviderConnection } from '@backstage/plugin-catalog-node';
import { SchedulerServiceTaskRunner, AuthService } from '@backstage/backend-plugin-api';
import { Config } from '@backstage/config';
/**
 * Provides entities from Hetzner Cloud.
 */
export declare class HetznerProvider implements EntityProvider {
    private readonly baseUrl;
    private connection?;
    private readonly taskRunner;
    private readonly auth;
    constructor(taskRunner: SchedulerServiceTaskRunner, config: Config, auth: AuthService);
    getProviderName(): string;
    connect(connection: EntityProviderConnection): Promise<void>;
    run(): Promise<void>;
    private fetchAndMapEntities;
    private mapServerToEntity;
    private mapVolumeToEntity;
    private mapPrimaryIPToEntity;
}
