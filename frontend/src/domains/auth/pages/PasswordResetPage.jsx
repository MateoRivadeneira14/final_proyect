
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PasswordResetPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', code: '', new_password: '' });
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setMensaje('');
    try {
      const res = await axios.post('http://localhost:3007/api/reset-password', form);
      setMensaje('Contraseña actualizada. Redirigiendo...');
      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Error al restablecer contraseña');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-700">Restablecer Contraseña</h1>
        {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}
        {mensaje && <p className="text-green-600 mb-4 text-sm text-center">{mensaje}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" name="email" placeholder="Correo" value={form.email}
            onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="code" placeholder="Código recibido" value={form.code}
            onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="password" name="new_password" placeholder="Nueva contraseña" value={form.new_password}
            onChange={handleChange} className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded">
            Restablecer
          </button>
        </form>
      </div>
    </div>
  );
}
