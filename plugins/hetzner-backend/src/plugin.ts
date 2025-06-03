import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { createRouter } from './router';
import { createHetznerService } from './services/HetznerService';
import { OpenAPI } from './hetznerClient/core/OpenAPI';

/**
 * hetznerPlugin backend plugin
 *
 * @public
 */
export const hetznerPlugin = createBackendPlugin({
  pluginId: 'hetzner',
  register(env) {
    env.registerInit({
      deps: {
        logger: coreServices.logger,
        httpRouter: coreServices.httpRouter,
        config: coreServices.rootConfig,
      },
      async init({ logger, httpRouter, config }) {
        const token = config.getOptionalString('backend.hetzner.token');

        if (!token) {
          logger.error('HCLOUD_TOKEN is not set.');
          throw new Error('HCLOUD_TOKEN is not set.');
        }

        OpenAPI.TOKEN = token;

        logger.info('Hetzner API token loaded successfully.');

        const hetznerService = await createHetznerService({
          logger,
        });

        httpRouter.use(
          (await createRouter({
            logger,
            hetznerService,
          })) as any,
        );
      },
    });
  },
});
