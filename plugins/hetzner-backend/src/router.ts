import express, { Request, Response } from 'express';
import Router from 'express-promise-router';
import { resolve } from 'path';
import { LoggerService } from '@backstage/backend-plugin-api';
import { HetznerService } from './services/HetznerService/types';

export interface RouterOptions {
  logger: LoggerService;
  hetznerService: HetznerService;
}

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger, hetznerService } = options;

  const router = Router();
  router.use(express.json());

  router.get('/health', (_, res: Response) => {
    logger.info('Health check passed');
    res.json({ status: 'ok' });
  });

  router.get('/overview', async (_req: Request, res: Response) => {
    try {
      const result = await hetznerService.getOverview();
      res.status(200).json(result);
    } catch (error: any) {
      logger.error(`Error fetching overview: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/servers', async (_req: Request, res: Response) => {
    try {
      const result = await hetznerService.getServers();
      res.status(200).json(result);
    } catch (error: any) {
      logger.error(`Error fetching servers: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/volumes', async (_req: Request, res: Response) => {
    try {
      const result = await hetznerService.getVolumes();
      res.status(200).json(result);
    } catch (error: any) {
      logger.error(`Error fetching volumes: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/primary_ips', async (_req: Request, res: Response) => {
    try {
      const result = await hetznerService.getPrimaryIps();
      res.status(200).json(result);
    } catch (error: any) {
      logger.error(`Error fetching primary IPs: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/resources', async (_req: Request, res: Response) => {
    try {
      const [servers, volumes, primaryIps] = await Promise.all([
        hetznerService.getServers(),
        hetznerService.getVolumes(),
        hetznerService.getPrimaryIps(),
      ]);

      const resources = [...servers, ...volumes, ...primaryIps];

      res.status(200).json(resources);
    } catch (error: any) {
      logger.error(`Error fetching resources: ${error.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/openapi.yaml', (_, res: Response) => {
    res.setHeader('Content-Type', 'application/octet-stream');
    res.sendFile(resolve(__dirname, '../openapi.yaml'));
  });

  return router;
}
