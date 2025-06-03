import { useEffect, useState } from 'react';
import { Typography, CircularProgress, Grid, Box } from '@mui/material';
import { InfoCard } from '@backstage/core-components';
import { useNavigate } from 'react-router-dom';
import {
  identityApiRef,
  useApi,
  configApiRef,
} from '@backstage/core-plugin-api';
import { fetchHetznerOverview } from '../../../utils/apiUtils';
import { makeStyles } from '@material-ui/core/styles';

interface OverviewData {
  totalServers: number;
  totalVolumes: number;
  totalPrimaryIps: number;
}

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
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
    letterSpacing: 0.5,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '8px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

const MetricCard = ({
  title,
  count,
  error,
  onClick,
}: {
  title: string;
  count: number;
  error: boolean;
  onClick: () => void;
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.card} onClick={onClick}>
      <Typography variant="h6" className={classes.label}>
        {title}
      </Typography>
      <Typography
        variant="h4"
        className={classes.value}
        sx={{
          color: error ? (theme) => theme.palette.error.main : '#1976d2',
          fontWeight: 'bold',
        }}
      >
        {error ? '--' : count}
      </Typography>
    </Box>
  );
};

export const ProjectSummary = () => {
  const identityApi = useApi(identityApiRef);
  const configApi = useApi(configApiRef);
  const navigate = useNavigate();

  const baseUrl = configApi.getOptionalString('backend.baseUrl');
  const HETZNER_API_URL = `${baseUrl}/api/hetzner/overview`;

  const [data, setData] = useState<OverviewData>({
    totalServers: 0,
    totalVolumes: 0,
    totalPrimaryIps: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await fetchHetznerOverview(identityApi, HETZNER_API_URL);
      setData(result);
    } catch (err: any) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [HETZNER_API_URL, identityApi]);

  const handleNavigate = (resourceType: string) => {
    const params = new URLSearchParams({
      'filters[kind]': 'resource',
      'filters[type]': resourceType,
      'filters[user]': 'all',
      limit: '20',
    });

    navigate(`/catalog?${params.toString()}`);
  };

  return (
    <InfoCard title="Project Summary">
      {loading && (
        <Box sx={{ textAlign: 'center', padding: 2 }}>
          <CircularProgress />
          <Typography sx={{ marginTop: 2, color: 'text.primary' }}>
            Loading data...
          </Typography>
        </Box>
      )}
      {!loading && (
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={6}>
            <MetricCard
              title="Servers"
              count={data.totalServers}
              error={error}
              onClick={() => handleNavigate('virtual-machine')}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <MetricCard
              title="Volumes"
              count={data.totalVolumes}
              error={error}
              onClick={() => handleNavigate('storage')}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <MetricCard
              title="Primary IPs"
              count={data.totalPrimaryIps}
              error={error}
              onClick={() => handleNavigate('network')}
            />
          </Grid>
        </Grid>
      )}
    </InfoCard>
  );
};
