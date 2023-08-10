import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useAuth } from '../AuthProvider/useAuth';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  });
  const { authenticate, token } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    if (data.email && data.password) {
      await authenticate(data.email, data.password);
    }
  };

  if (token) {
    return <Navigate to='/' replace={true} />;
  }

  return (
    <Container maxWidth='sm' style={{ marginTop: '30vh' }}>
      <Typography variant='h4' align='center'>
        User Login App
      </Typography>
      <form className='form'>
        <TextField
          id='email'
          label='Email'
          fullWidth
          value={data.email}
          onChange={handleChange}
          style={{ margin: 10 }}
        />
        <TextField
          id='password'
          label='Password'
          type='password'
          fullWidth
          value={data.password}
          onChange={handleChange}
          style={{ margin: 10 }}
        />
        <Button type='button' color='primary' variant='contained' onClick={handleSubmit}>
          Log in
          {/* 
            Instead of having the string hardcoded, here we can use constants so
            it is reflected across the app
        */}
        </Button>
      </form>
    </Container>
  );
};

export default Login;
