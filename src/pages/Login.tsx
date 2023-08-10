import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useAuth } from '../AuthProvider/useAuth';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  });
  const { authenticate, token } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //if (e.target.id === 'email') {
    setData({ ...data, [e.target.id]: e.target.value });
    // } else if (e.target.id === 'password') {
    //   setData({ ...data, password: e.target.value });
    // }
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
    <form className='form'>
      <TextField
        helperText='Email'
        id='email'
        label='Email'
        fullWidth
        value={data.email}
        onChange={handleChange}
      />
      <TextField
        helperText='Password'
        id='password'
        label='Password'
        type='password'
        fullWidth
        value={data.password}
        onChange={handleChange}
      />
      <Button type='button' color='primary' variant='contained' onClick={handleSubmit}>
        Log in
        {/* 
            Instead of having the string hardcoded, here we can use constants so
            it is reflected across the app
        */}
      </Button>
    </form>
  );
};

export default Login;
