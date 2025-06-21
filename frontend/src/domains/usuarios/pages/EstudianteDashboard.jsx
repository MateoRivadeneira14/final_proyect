
import Navbar from '../../../components/Navbar';
import { useAuth } from '../../../context/AuthContext';

export default function EstudianteDashboard() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-xl font-bold">Bienvenido, {user?.nickname}</h1>
        <p className="text-sm">Rol: {user?.role}</p>
        <p className="text-sm">Correo: {user?.email}</p>
      </div>
    </>
  );
}
