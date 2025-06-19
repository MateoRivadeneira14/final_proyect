import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './domains/auth/pages/LoginPage';
import RegisterPage from './domains/auth/pages/RegisterPage';
import VerifyCodePage from './domains/auth/pages/VerifyCodePage';
import PasswordRequestResetPage from './domains/auth/pages/PasswordRequestResetPage';
import PasswordResetPage from './domains/auth/pages/PasswordResetPage';
import AdminDashboard from './domains/usuarios/pages/AdminDashboard';
import EstudianteDashboard from './domains/usuarios/pages/EstudianteDashboard';
import DirectorDashboard from './domains/usuarios/pages/DirectorDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import UnauthorizedPage from './pages/UnauthorizedPage';
import LandingPage from './pages/LandingPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify" element={<VerifyCodePage />} />
          <Route path="/request-reset" element={<PasswordRequestResetPage />} />
          <Route path="/reset" element={<PasswordResetPage />} />
          <Route path="/admin/:nick" element={<ProtectedRoute requiredRole="admin"><AdminDashboard /></ProtectedRoute>} />
          <Route path="/estudiante/:nick" element={<ProtectedRoute requiredRole="estudiante"><EstudianteDashboard /></ProtectedRoute>} />
          <Route path="/director/:nick" element={<ProtectedRoute requiredRole="director"><DirectorDashboard /></ProtectedRoute>} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
