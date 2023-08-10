import { Typography, Toolbar, Box, AppBar, Button } from '@mui/material';
import { useAuth } from '../AuthProvider/useAuth';

const Header = () => {
  const { logout } = useAuth();
  function handleLogout() {
    logout();
  }
  /**
   * It's recommended to use function variables and attach them
   * to the handlers instead of having the inline arrow functions
   * since they create a new function every time a component is re-rendered
   *
   */
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Users App
            </Typography>
            <Toolbar color='inherit' onClick={handleLogout}>
              <Typography variant='h6' component='span' sx={{ flexGrow: 1, cursor: 'pointer' }}>
                Logout
              </Typography>
            </Toolbar>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
