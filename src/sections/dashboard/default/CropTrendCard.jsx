import { useState } from 'react';

// material-ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// project imports
import MainCard from 'components/MainCard';
import IncomeAreaChart from './IncomeAreaChart';
import { InputLabel } from '@mui/material';

// ==============================|| DEFAULT - UNIQUE VISITOR ||============================== //

export default function CropTrendCard() {
  const [view, setView] = useState('monthly'); // This needs to be changed based on the filter, not monthly or weekly anymore (e.g., crop type)

  return (
    <>
      <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Grid>
          <Typography variant="h5">Crop Yield Prediction</Typography>
        </Grid>
        <Grid>
          <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
            <InputLabel variant="Body2">Filter Crop 1: </InputLabel>
            <Select
              name="crop"
              value={"Palay"}
            >
              <MenuItem value="" disabled>
                Select Crop Type
              </MenuItem>
              <MenuItem value="Palay">
                Palay
              </MenuItem>
              <MenuItem value="Palay">
                Corn
              </MenuItem>
              <MenuItem value="Palay">
                Other
              </MenuItem>
            </Select>
          </Stack>
        </Grid>
      </Grid>
      <MainCard content={false} sx={{ mt: 1.5 }}>
        <Box sx={{ pt: 1, pr: 2 }}>
          <IncomeAreaChart view={view} />
        </Box>
      </MainCard>
    </>
  );
}
