
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RegisterEmpresaPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    nickname: '',
    nombre_empresa: '',
    ruc_empresa: '',
    direccion: '',
    telefono_contacto: ''
  });
  const [error, setError] = useState('');
  const [exito, setExito] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setExito('');
    try {
      const response = await axios.post('http://localhost:3001/api/register/empresa', form);
      setExito('Registro exitoso. Tu cuenta será verificada por un administrador.');
      setTimeout(() => navigate('/verify'), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Error al registrar empresa');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-700">Registro de Empresa</h1>
        {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}
        {exito && <p className="text-green-600 mb-4 text-sm text-center">{exito}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="nickname" placeholder="Nombre de usuario" value={form.nickname}
            onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Correo de contacto" value={form.email}
            onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="password" name="password" placeholder="Contraseña" value={form.password}
            onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="nombre_empresa" placeholder="Nombre de la empresa" value={form.nombre_empresa}
            onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="ruc_empresa" placeholder="RUC" value={form.ruc_empresa}
            onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="direccion" placeholder="Dirección (opcional)" value={form.direccion}
            onChange={handleChange} className="w-full p-2 border rounded" />
          <input type="text" name="telefono_contacto" placeholder="Teléfono (opcional)" value={form.telefono_contacto}
            onChange={handleChange} className="w-full p-2 border rounded" />
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded">
            Registrarse como empresa
          </button>
        </form>
        <div className="mt-4 text-sm text-center text-gray-600">
          <p>¿Ya tienes una cuenta? <a href="/login" className="text-indigo-600 hover:underline">Inicia sesión</a></p>
          <a href="/" className="text-indigo-600 hover:underline block mt-1">Volver al inicio</a>
        </div>
      </div>
    </div>
  );
}
