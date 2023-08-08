import { Container } from '@mui/material';
import Header from './Header';
import { Navigate } from "react-router-dom";
import { useAuth } from '../AuthProvider/useAuth';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { token, logout } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace={true} />
  } 
  
  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        {children}
      </Container>
    </>
  );
};

export default AppLayout;
