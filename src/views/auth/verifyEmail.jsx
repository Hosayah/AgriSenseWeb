import { Link } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// project imports
import AuthWrapper from 'sections/auth/AuthWrapper';



// ================================|| JWT - LOGIN ||================================ //

export default function VerifyEmail() {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Stack direction="row" sx={{ alignItems: 'baseline', justifyContent: 'center', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3" color='primary'>Verify Email</Typography>
          </Stack>
        </Grid>
        <Grid size={12}>
          <Stack direction="row" sx={{ alignItems: 'baseline', justifyContent: 'center', mb: { xs: -0.5, sm: 2 } }}>
            <Typography component={Link} to={'/register'} variant="body1" sx={{ textDecoration: 'none' }} color="black">
            An email is sent to your registered email address. Please verify your email to continue by clicking the provided link.
            </Typography>
          </Stack>
          <Stack direction="column" sx={{ alignItems: 'baseline', justifyContent: 'center', mt: { xs: 2, sm: 2 } }}>
            <Button component={Link} to={'/login'} fullWidth size="large" variant="contained" color="primary">
              Proceed to Login
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
