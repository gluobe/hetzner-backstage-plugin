import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';
import { catalogProcessingExtensionPoint } from '@backstage/plugin-catalog-node/alpha';
import { HetznerProvider } from './HetznerProvider';

export const catalogModuleHetznerEntityProvider = createBackendModule({
  pluginId: 'catalog',
  moduleId: 'hetzner-entity-provider',
  register(env) {
    env.registerInit({
      deps: {
        catalog: catalogProcessingExtensionPoint,
        scheduler: coreServices.scheduler,
        logger: coreServices.logger,
        config: coreServices.rootConfig,
        auth: coreServices.auth,
      },
      async init({ catalog, scheduler, logger, config, auth }) {
        logger.info('Adding Hetzner provider to the catalog plugin');

        const scheduleConfig = config.getOptionalConfig(
          'catalog.providers.hetzner.gluobe.schedule',
        );
        const frequency =
          scheduleConfig?.getOptionalNumber('frequency.minutes') || 1;
        const timeout =
          scheduleConfig?.getOptionalNumber('timeout.minutes') || 10;

        const taskRunner = scheduler.createScheduledTaskRunner({
          frequency: { minutes: frequency },
          timeout: { minutes: timeout },
        });

        const provider = new HetznerProvider(taskRunner, config, auth);
        catalog.addEntityProvider(provider);
      },
    });
  },
});
