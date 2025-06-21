
import { useEffect, useState } from 'react';
import { validateToken } from '../../../services/authService';

export default function EmpresaDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Token no encontrado.');
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const data = await validateToken(token);
        if (data?.valid) {
          setUser(data);
        } else {
          setError('Token inválido.');
        }
      } catch (err) {
        setError('Error al validar token.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-10">Cargando...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Bienvenido, {user.nickname}</h1>
      <p className="text-gray-600">Rol: {user.role}</p>
      <p className="text-gray-600">Correo: {user.email}</p>
    </div>
  );
}
