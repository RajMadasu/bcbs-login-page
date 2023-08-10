import { Suspense } from 'react';
import { LinearProgress } from '@mui/material';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserPage from './pages/UserPage';
import { AuthProvider } from './AuthProvider';

function App() {
  return (
    <Suspense fallback={<LinearProgress />}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/**
             * if we have more nested routes,
            we can also leverage the outlet of React-router V6to avoid 
            re-rendering of the parent routes
             *  */}
            <Route path='/' element={<UserPage />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
