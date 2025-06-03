import { Grid } from '@mui/material';
import { InfoCard } from '@backstage/core-components';
import { DetailRow } from './DetailRow';

export const PrimaryIPDetails = ({
  data,
  classes,
}: {
  data: any;
  classes: Record<string, string>;
}) => {
  const details = [
    { label: 'IP Address', value: data.ip || 'N/A' },
    { label: 'Type', value: data.type || 'N/A' },
    { label: 'DNS PTR', value: data.dns_ptr || 'N/A' },
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
        <InfoCard title="Primary IP Details">
          <Grid container>
            {details.map((detail, index) => (
              <Grid item xs={6} key={index}>
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
