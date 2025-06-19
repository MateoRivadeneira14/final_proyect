import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a UNIBRIDGE</h1>
      <p className="text-lg mb-6">Tu plataforma de gestión académica distribuida</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-white text-indigo-700 px-6 py-2 rounded shadow hover:bg-gray-100">
          Iniciar sesión
        </Link>
        <Link to="/register" className="bg-white text-indigo-700 px-6 py-2 rounded shadow hover:bg-gray-100">
          Registrarse
        </Link>
      </div>
    </div>
  );
}
