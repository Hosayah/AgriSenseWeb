import { Link } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthLogin from 'sections/auth/AuthLogin';

// ================================|| JWT - LOGIN ||================================ //

export default function Login() {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Stack direction="row" sx={{ alignItems: 'baseline', justifyContent: 'center', mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3" color='primary'>Login</Typography>
            
          </Stack>
        </Grid>
        <Grid size={12}>
          <AuthLogin />
          <Stack direction="row" sx={{ alignItems: 'baseline', justifyContent: 'center', mt: { xs: -0.5, sm: 2 } }}>
            <Typography component={Link} to={'/register'} variant="body1" sx={{ textDecoration: 'none' }} color="primary">
            Don&apos;t have an account?
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
