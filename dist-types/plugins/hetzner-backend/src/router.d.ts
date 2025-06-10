import express from 'express';
import { LoggerService } from '@backstage/backend-plugin-api';
import { HetznerService } from './services/HetznerService/types';
export interface RouterOptions {
    logger: LoggerService;
    hetznerService: HetznerService;
}
export declare function createRouter(options: RouterOptions): Promise<express.Router>;
