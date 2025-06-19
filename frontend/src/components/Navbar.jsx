import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const renderLinks = () => {
    if (!user) return null;

    switch (user.role) {
      case 'admin':
        return (
          <>
            <a href="/admin" className="hover:underline">Panel Admin</a>
            <a href="/admin/users" className="hover:underline">Usuarios</a>
          </>
        );
      case 'estudiante':
        return (
          <>
            <a href="/estudiante" className="hover:underline">Inicio</a>
            <a href="/estudiante/solicitudes" className="hover:underline">Mis Solicitudes</a>
          </>
        );
      case 'director':
        return (
          <>
            <a href="/director" className="hover:underline">Panel Director</a>
            <a href="/director/recursos" className="hover:underline">Recursos</a>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <span className="font-semibold">UNIBRIDGE</span>
        {renderLinks()}
      </div>
      {user && (
        <button onClick={handleLogout} className="bg-red-600 px-4 py-1 rounded">
          Cerrar sesión
        </button>
      )}
    </nav>
  );
}
