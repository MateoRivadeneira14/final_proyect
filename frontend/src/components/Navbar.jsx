
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-indigo-600 text-white px-4 py-2 flex justify-between items-center">
      <Link to="/" className="font-semibold text-lg">UNIBRIDGE</Link>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-sm hidden sm:inline">Hola, {user.nickname}</span>
            <Link to={`/${user.role}/${encodeURIComponent(user.nickname)}`} className="hover:underline">
              Mi panel
            </Link>
            <button onClick={logout} className="bg-white text-indigo-600 px-2 py-1 rounded hover:bg-gray-100">
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Iniciar sesión</Link>
            <Link to="/register" className="hover:underline">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
}
