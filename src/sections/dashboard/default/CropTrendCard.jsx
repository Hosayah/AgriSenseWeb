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
  const [view, setView] = useState('monthly'); // This needs to be changed based on the filter, not monthly or weekly anymore

  return (
    <>
      <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Grid>
          <Typography variant="h5">Crop Historical Productions</Typography>
        </Grid>
        <Grid>
          <Stack direction="row" sx={{ alignItems: 'center', gap: 1 }}>
            <InputLabel variant="Body2">Filter Crop 1: </InputLabel>
            <Select
              name="crop"
              value={"Palay"}
            >
              <MenuItem value="" disabled>
                Select Crop
              </MenuItem>
              <MenuItem value="Palay">
                Palay
              </MenuItem>
              <MenuItem value="Palay">
                Corn
              </MenuItem>
              <MenuItem value="Palay">
                Banana
              </MenuItem>
            </Select>
            <InputLabel variant="Body2">Filter Crop 2: </InputLabel>
            <Select
              name="crop"
              value={"Palay"}
            >
              <MenuItem value="" disabled>
                Select Crop
              </MenuItem>
              <MenuItem value="Palay">
                Palay
              </MenuItem>
              <MenuItem value="Palay">
                Corn
              </MenuItem>
              <MenuItem value="Palay">
                Banana
              </MenuItem>
            </Select>
            <InputLabel variant="Body2">Start year: </InputLabel>
            <Select
              name="startYear"
              value={"2025"}
            >
              <MenuItem value="" disabled>
                Select Start Year
              </MenuItem>
              <MenuItem value="2024">
                2024
              </MenuItem>
              <MenuItem value="2023">
                2023
              </MenuItem>
              <MenuItem value="2022">
                2022
              </MenuItem>
              <MenuItem value="2021">
                2021
              </MenuItem>
              <MenuItem value="2020">
                2020
              </MenuItem>
            </Select>
            <InputLabel variant="Body2">End year: </InputLabel>
            <Select
              name="startYear"
              value={"2025"}
            >
              <MenuItem value="">
                Select End Year
              </MenuItem>
              <MenuItem value="2024">
                2024
              </MenuItem>
              <MenuItem value="2023">
                2023
              </MenuItem>
              <MenuItem value="2022">
                2022
              </MenuItem>
              <MenuItem value="2021">
                2021
              </MenuItem>
              <MenuItem value="2020">
                2020
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
