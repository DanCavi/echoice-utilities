import { Grid, CircularProgress } from '@mui/material';
import { useAuthContext } from 'AuthContext';
import TituloStandar from 'ui-component/Titulo/TituloStandar';

function RouteGuard({ children }) {
  const { login, isAuthenticated, accessToken, isLoading } = useAuthContext();


  if (!isAuthenticated || !accessToken) {
    
    login();
  }

  if (isLoading) {
    return (
      <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item>
          <CircularProgress />
        </Grid>
        <Grid item>
          <TituloStandar titulo="Cargando" fontSize="30px" />
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      {/* <Outlet /> */}
      {children}
    </>
  );
}

export default RouteGuard;
