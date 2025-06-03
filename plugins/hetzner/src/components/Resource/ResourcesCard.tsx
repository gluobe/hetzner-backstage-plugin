import { useEntity } from '@backstage/plugin-catalog-react';
import { InfoCard } from '@backstage/core-components';
import { makeStyles } from '@material-ui/core/styles';
import { ResourceDetails } from './ResourceDetails/ResourceDetails';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  value: {
    overflow: 'hidden',
    lineHeight: '24px',
    wordBreak: 'break-word',
    color: theme.palette.text.primary,
  },
  label: {
    color: theme.palette.text.secondary,
    textTransform: 'uppercase',
    fontSize: '10px !important',
    fontWeight: 'bold',
    marginBottom: '8px !important',
    letterSpacing: 0.5,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));

export const ResourcesCard = () => {
  const { entity } = useEntity();
  const classes = useStyles();
  const annotations = entity?.metadata?.annotations || {};
  const hetznerData = annotations['hetzner.com/data']
    ? JSON.parse(annotations['hetzner.com/data'])
    : null;

  if (!hetznerData) {
    return (
      <InfoCard title="Hetzner VM">
        <Typography>No Hetzner data found for this resource.</Typography>
      </InfoCard>
    );
  }

  const resourceType = hetznerData.resource_type;

  return (
    <ResourceDetails
      resourceType={resourceType}
      data={hetznerData}
      classes={classes}
    />
  );
};
