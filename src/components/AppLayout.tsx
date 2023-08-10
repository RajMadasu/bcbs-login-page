import { Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './Header';
import { useAuth } from '../AuthProvider/useAuth';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to='/login' replace={true} />;
  }
  /**
   * I would totally avoid adding the inline styles(in here I was running against the time).
   * I would prefer styled components over classNames as well
   *
   * The dynamism of the styled components helps me better handle the styles
   * based on the props
   */
  return (
    <>
      <Header />
      <Container maxWidth='lg' style={{ marginTop: '20px' }}>
        {children}
      </Container>
    </>
  );
};

export default AppLayout;
