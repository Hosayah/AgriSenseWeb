import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
import { withAlpha } from 'utils/colorUtils';

function Legend({ items, onToggle }) {
  return (
    <Stack direction="row" sx={{ gap: 2, justifyContent: 'center', mt: 2 }}>
      {items.map((item) => (
        <Stack
          key={item.label}
          direction="row"
          sx={{ gap: 1, cursor: 'pointer', alignItems: 'center' }}
          onClick={() => onToggle(item.label)}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              bgcolor: item.visible ? item.color : 'text.secondary',
              borderRadius: '50%'
            }}
          />
          <Typography variant="body2">{item.label}</Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default function CropTrendChart({ labels, series }) {
  const theme = useTheme();

  const [visibility, setVisibility] = useState(
    Object.fromEntries(series.map((s) => [s.label, true]))
  );

  const toggleVisibility = (label) => {
    setVisibility((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const chartSeries = series
    .filter((s) => visibility[s.label])
    .map((s, idx) => ({
      type: 'line',
      data: s.data,
      label: s.label,
      showMark: false,
      area: true,
      id: s.id,
      color: theme.vars.palette.primary[idx * 100 + 400] || theme.vars.palette.primary.main,
      stroke: theme.vars.palette.primary.main,
      strokeWidth: 2
    }));

  return (
    <>
      <LineChart
        hideLegend
        grid={{ horizontal: true, vertical: false }}
        xAxis={[{ scaleType: 'point', data: labels }]}
        yAxis={[{ disableLine: true }]}
        height={450}
        margin={{ top: 40, bottom: 0, right: 20, left: 5 }}
        series={chartSeries}
        sx={{
          '& .MuiChartsGrid-line': {
            strokeDasharray: '4 4',
            stroke: theme.vars.palette.divider
          }
        }}
      >
        <defs>
          <linearGradient id="gradientPrimary" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor={withAlpha(theme.vars.palette.primary.main, 0.4)} />
            <stop offset="90%" stopColor={withAlpha(theme.vars.palette.background.default, 0.4)} />
          </linearGradient>
        </defs>
      </LineChart>

      <Legend
        items={series.map((s, idx) => ({
          label: s.label,
          color: theme.vars.palette.primary[idx * 100 + 400],
          visible: visibility[s.label]
        }))}
        onToggle={toggleVisibility}
      />
    </>
  );
}

CropTrendChart.propTypes = {
  labels: PropTypes.array.isRequired,
  series: PropTypes.array.isRequired
};
