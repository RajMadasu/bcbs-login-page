import { Typography, Toolbar, Box, AppBar } from '@mui/material';
import { useAuth } from '../AuthProvider/useAuth';


const Header = () => {
  const { logout } = useAuth();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Users App
            </Typography>
            <Toolbar color='inherit' onClick={() => logout()}>Logout</Toolbar>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
