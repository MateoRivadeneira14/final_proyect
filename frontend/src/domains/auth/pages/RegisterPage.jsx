import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    nickname: '',
    role: 'estudiante'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await axios.post('http://localhost:3001/api/register', form);
      setSuccess('Usuario registrado. Revisa tu correo para verificar.');
      setTimeout(() => navigate('/verify'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Error al registrar');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Registro</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-600 mb-2">{success}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="nickname"
          placeholder="Nombre de usuario"
          value={form.nickname}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />
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
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="estudiante">Estudiante</option>
          <option value="director">Director</option>
        </select>
        <button type="submit" className="bg-green-600 text-white py-2 rounded">
          Registrarse
        </button>
      </form>

      <div className="mt-4 flex flex-col gap-2 text-sm">
        <p>
          ¿Ya tienes una cuenta?{' '}
          <Link to="/login" className="text-blue-600 underline font-semibold">
            Ingresar
          </Link>
        </p>
        <Link to="/" className="text-sky-600 hover:underline font-semibold">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
