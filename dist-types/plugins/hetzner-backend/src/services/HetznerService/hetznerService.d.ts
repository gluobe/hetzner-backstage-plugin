import { LoggerService } from '@backstage/backend-plugin-api';
import { HetznerService } from './types';
export declare function createHetznerService({ logger, }: {
    logger: LoggerService;
}): Promise<HetznerService>;
