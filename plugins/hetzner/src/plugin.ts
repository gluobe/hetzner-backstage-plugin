import {
  createPlugin,
  createRoutableExtension,
  createComponentExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const hetznerPlugin = createPlugin({
  id: 'hetzner',
  routes: {
    root: rootRouteRef,
  },
});

export const EntityHetznerContent = hetznerPlugin.provide(
  createComponentExtension({
    name: 'EntityHetznerContent',
    component: {
      lazy: () =>
        import('./components/Resource/ResourcesCard').then(
          m => m.ResourcesCard,
        ),
    },
  }),
);

export const HetznerPage = hetznerPlugin.provide(
  createRoutableExtension({
    name: 'HetznerCloudPage',
    component: () =>
      import('./components/HetznerOverview/OverviewPage').then(
        m => m.OverviewPage,
      ),
    mountPoint: rootRouteRef,
  }),
);
