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
        let tokensFromConfig = [];
        if (config.has('backend.hetzner.tokens')) {
          tokensFromConfig.push(...config.getOptionalStringArray('backend.hetzner.tokens'));
        }
        if (config.has('backend.hetzner.token')) {
          tokensFromConfig.push(config.getOptionalString('backend.hetzner.token'));
        }
        const tokens = [...new Set(tokensFromConfig)];

        if (tokens.length == 0) {
          logger.error('No Hetzner tokens set.');
          throw new Error('No Hetzner tokens set.');
        }

        logger.info('Hetzner API token loaded successfully.');

        const hetznerService = await createHetznerService({
          logger,
          tokens,
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
