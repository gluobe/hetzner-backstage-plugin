import { Grid } from '@mui/material';
import { Header, Page, Content, HeaderLabel } from '@backstage/core-components';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import { ProjectSummary } from '../ProjectSummary';
import { ResourceComponent } from '../Table';

export const OverviewPage = () => {
  const configApi = useApi(configApiRef);

  const projectTitle =
    configApi.getOptionalString('app.hetzner.project.title') || 'Hetzner Cloud';
  const projectOwner =
    configApi.getOptionalString('app.hetzner.project.owner') || 'Unknown';
  const projectLifecycle =
    configApi.getOptionalString('app.hetzner.project.lifecycle') || 'Unknown';

  return (
    <Page themeId="tool">
      <Header
        title={projectTitle}
        subtitle="Get a quick overview of your Hetzner Cloud infrastructure."
      >
        <HeaderLabel label="Owner" value={projectOwner} />
        <HeaderLabel label="Lifecycle" value={projectLifecycle} />
      </Header>
      <Content>
        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} md={4}>
            <ProjectSummary />
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ResourceComponent />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};
