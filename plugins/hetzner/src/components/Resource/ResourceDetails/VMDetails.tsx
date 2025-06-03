import { Grid } from '@mui/material';
import { InfoCard } from '@backstage/core-components';
import { DetailRow } from './DetailRow';

const formatTraffic = (value: number): string => {
  if (!value || isNaN(value)) return 'N/A';
  if (value >= 1e12) return `${(value / 1e12).toFixed(2)} TB`;
  if (value >= 1e9) return `${(value / 1e9).toFixed(2)} GB`;
  if (value >= 1e6) return `${(value / 1e6).toFixed(2)} MB`;
  if (value >= 1e3) return `${(value / 1e3).toFixed(2)} KB`;
  return `${value} B`;
};

export const VMDetails = ({
  data,
  classes,
}: {
  data: any;
  classes: Record<string, string>;
}) => (
  <Grid container spacing={3}>
    {/* General Information */}
    <Grid item xs={12} md={6}>
      <InfoCard title="VM Details">
        <Grid container>
          <Grid item xs={6}>
            <DetailRow
              label="Created"
              value={
                data.created
                  ? new Date(data.created).toISOString().split('T')[0]
                  : null
              }
              classes={classes}
            />
            <DetailRow label="Status" value={data.status} classes={classes} />
          </Grid>
          <Grid item xs={6}>
            <DetailRow
              label="Datacenter"
              value={data.datacenter?.name}
              classes={classes}
            />
            <DetailRow
              label="Location"
              value={`${data.datacenter?.location?.city || 'N/A'}, ${
                data.datacenter?.location?.country || 'N/A'
              }`}
              classes={classes}
            />
          </Grid>
        </Grid>
      </InfoCard>
    </Grid>

    {/* Networking */}
    <Grid item xs={12} md={6}>
      <InfoCard title="Networking">
        <Grid container>
          <Grid item xs={6}>
            <DetailRow
              label="IPv4"
              value={data.public_net?.ipv4?.ip}
              classes={classes}
            />
          </Grid>
          <Grid item xs={6}>
            <DetailRow
              label="Outgoing Traffic"
              value={formatTraffic(data.outgoing_traffic)}
              classes={classes}
            />
            <DetailRow
              label="Ingoing Traffic"
              value={formatTraffic(data.ingoing_traffic)}
              classes={classes}
            />
          </Grid>
        </Grid>
      </InfoCard>
    </Grid>

    {/* Compute */}
    <Grid item xs={12} md={6}>
      <InfoCard title="Compute">
        <Grid container>
          <Grid item xs={6}>
            <DetailRow
              label="OS"
              value={`${data.image?.os_flavor || 'N/A'} ${
                data.image?.os_version || ''
              }`}
              classes={classes}
            />
            <DetailRow
              label="Type"
              value={data.server_type?.name}
              classes={classes}
            />
          </Grid>
          <Grid item xs={6}>
            <DetailRow
              label="Cores"
              value={data.server_type?.cores}
              classes={classes}
            />
            <DetailRow
              label="Memory"
              value={`${data.server_type?.memory || 'N/A'} GB`}
              classes={classes}
            />
            <DetailRow
              label="Disk"
              value={`${data.server_type?.disk || 'N/A'} GB`}
              classes={classes}
            />
          </Grid>
        </Grid>
      </InfoCard>
    </Grid>
  </Grid>
);
