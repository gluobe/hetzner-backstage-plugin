import { Grid, Typography } from '@mui/material';

export const DetailRow = ({
  label,
  value,
  classes,
}: {
  label: string;
  value: string | number | null;
  classes: Record<string, string>;
}) => (
  <Grid sx={{ padding: '8px' }}>
    <Typography
      className={classes.label}
      sx={{
        fontWeight: 'bold !important',
        letterSpacing: '0.5px !important',
      }}
    >
      {label}
    </Typography>
    <Typography variant="body2" className={classes.value}>{value || 'N/A'}</Typography>
  </Grid>
);
