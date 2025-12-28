import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';

import MainCard from 'components/MainCard';
import CropTrendChart from './CropTrendChart';

export default function CropTrendCard({ labels, series }) {
  return (
    <>
      <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Grid>
          <Typography variant="h5">Crop Yield Prediction</Typography>
        </Grid>

        {/* (Optional) keep filter UI for later */}
        <Grid>
          <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
            <InputLabel>Filter Crop:</InputLabel>
            <Select size="small" value="" disabled>
              <MenuItem value="">Select Crop</MenuItem>
            </Select>
          </Stack>
        </Grid>
      </Grid>

      <MainCard content={false} sx={{ mt: 1.5 }}>
        <Box sx={{ pt: 1, pr: 2 }}>
          <IncomeAreaChart labels={labels} series={series} />
        </Box>
      </MainCard>
    </>
  );
}

CropTrendCard.propTypes = {
  labels: PropTypes.array.isRequired,
  series: PropTypes.array.isRequired
};
