import { Link } from 'react-router-dom';

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-center px-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">403 - Acceso no autorizado</h1>
      <p className="text-lg text-gray-700 mb-6">
        No tienes permisos para acceder a esta página.
      </p>
      <Link
        to="/"
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
