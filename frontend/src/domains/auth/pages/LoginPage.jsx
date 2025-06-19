import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import axios from 'axios';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:3004/api/login', form);
      const userData = response.data;
      login(userData);

      navigate(`/${userData.role}/${encodeURIComponent(userData.nickname)}`);
    } catch (err) {
      setError(err.response?.data?.message || 'Credenciales inválidas');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Iniciar sesión</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={form.email}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />

        <Link to="/request-reset" className="text-sm text-blue-600 hover:underline self-start">
          ¿Olvidaste tu contraseña?
        </Link>

        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          Ingresar
        </button>
      </form>

      <div className="mt-4 flex flex-col gap-2 text-sm">
        <p>
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-blue-600 hover:underline font-semibold">
            Regístrate
          </Link>
        </p>
        <Link to="/" className="text-blue-600 hover:underline font-semibold">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
