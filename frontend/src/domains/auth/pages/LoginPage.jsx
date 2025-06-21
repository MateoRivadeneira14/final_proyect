
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
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-700">Iniciar Sesión</h1>
        {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" name="email" placeholder="Correo" value={form.email}
            onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="password" name="password" placeholder="Contraseña" value={form.password}
            onChange={handleChange} className="w-full p-2 border rounded" required />

          <div className="flex items-center justify-between text-sm text-gray-600 px-1 flex-wrap md:flex-nowrap">
            <span className="inline-flex items-center space-x-4"><input type="checkbox" className="form-checkbox text-indigo-600" /><span className="ml-1">Recordarme</span></span>
            <Link to="/request-reset" className="text-indigo-600 hover:underline">¿Olvidaste tu contraseña?</Link>
          </div>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded">
            Ingresar
          </button>
        </form>
        <div className="mt-4 text-sm text-center text-gray-600">
          <p>¿No tienes cuenta? <a href="/register" className="text-indigo-600 hover:underline">Regístrate</a></p>
          <Link to="/" className="text-indigo-600 hover:underline block mt-1">Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
