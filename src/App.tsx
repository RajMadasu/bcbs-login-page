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
            <Route path='/' element={<UserPage />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
