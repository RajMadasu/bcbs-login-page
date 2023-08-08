import { TextField, Button } from '@mui/material';
import { useAuth } from '../AuthProvider/useAuth';
import { useState } from 'react';
import { Navigate } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    });
    const { authenticate, token } = useAuth();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'email') {
            setData({ ...data, email: e.target.value });
        } else if (e.target.id === 'password') {
            setData({ ...data, password: e.target.value });
        }
    };

    const handleSubmit = async () => {
        if (data.email && data.password) {
            await authenticate(data.email, data.password);
        }
    }

    if (token) {
        return <Navigate to="/" replace={true} />
    }

    return (
        <form className="form">
            <TextField
                helperText="Please enter your email"
                id="email"
                label="Email"
                fullWidth
                value={data.email}
                onChange={handleChange}
            />
            <TextField
                helperText="Please enter your password"
                id="password"
                label="Password"
                type='password'
                fullWidth
                value={data.password}
                onChange={handleChange}
            />
            <Button type="button" color="primary" variant="contained" onClick={handleSubmit}>
                Log in
            </Button>
        </form>
    )
}

export default Login;
