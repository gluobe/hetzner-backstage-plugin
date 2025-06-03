import { Grid } from '@mui/material';
import { InfoCard } from '@backstage/core-components';
import { DetailRow } from './DetailRow';

export const VolumeDetails = ({
  data,
  classes,
}: {
  data: any;
  classes: Record<string, string>;
}) => {
  const details = [
    { label: 'Size', value: `${data.size || 'N/A'} GB` },
    { label: 'Status', value: data.status || 'N/A' },
    {
      label: 'Created',
      value: data.created
        ? new Date(data.created).toISOString().split('T')[0]
        : null,
    },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InfoCard title="Storage Details">
          <Grid container>
            {details.map((detail, index) => (
              <Grid item xs={4} key={index}>
                <DetailRow
                  label={detail.label}
                  value={detail.value}
                  classes={classes}
                />
              </Grid>
            ))}
          </Grid>
        </InfoCard>
      </Grid>
    </Grid>
  );
};
