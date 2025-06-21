
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    nickname: '',
    universidad_id: '',
    facultad_id: '',
    carrera_id: '',
    cedula: '',
    telefono: '',
    fecha_nacimiento: ''
  });
  const [universidades, setUniversidades] = useState([]);
  const [facultades, setFacultades] = useState([]);
  const [carreras, setCarreras] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/universidades')
      .then(res => setUniversidades(res.data))
      .catch(() => setUniversidades([]));
  }, []);

  useEffect(() => {
    if (form.universidad_id) {
      axios.get(`http://localhost:3001/api/facultades?universidad_id=${form.universidad_id}`)
        .then(res => setFacultades(res.data))
        .catch(() => setFacultades([]));
    }
  }, [form.universidad_id]);

  useEffect(() => {
    if (form.facultad_id) {
      axios.get(`http://localhost:3001/api/carreras?facultad_id=${form.facultad_id}`)
        .then(res => setCarreras(res.data))
        .catch(() => setCarreras([]));
    }
  }, [form.facultad_id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://localhost:3001/api/register/estudiante', form);
      navigate('/verify');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al registrar usuario');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-700">Registro de Estudiante</h1>
        {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="nickname" placeholder="Nombre de usuario" value={form.nickname}
            onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Correo institucional" value={form.email}
            onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="password" name="password" placeholder="Contraseña" value={form.password}
            onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="cedula" placeholder="Cédula" value={form.cedula}
            onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="telefono" placeholder="Teléfono" value={form.telefono}
            onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="date" name="fecha_nacimiento" placeholder="Fecha de nacimiento" value={form.fecha_nacimiento}
            onChange={handleChange} className="w-full p-2 border rounded" required />

          <select name="universidad_id" value={form.universidad_id} onChange={handleChange}
            className="w-full p-2 border rounded" required>
            <option value="">Seleccione Universidad</option>
            {universidades.map(u => <option key={u.id} value={u.id}>{u.nombre}</option>)}
          </select>

          <select name="facultad_id" value={form.facultad_id} onChange={handleChange}
            className="w-full p-2 border rounded" required disabled={!facultades.length}>
            <option value="">Seleccione Facultad</option>
            {facultades.map(f => <option key={f.id} value={f.id}>{f.nombre}</option>)}
          </select>

          <select name="carrera_id" value={form.carrera_id} onChange={handleChange}
            className="w-full p-2 border rounded" required disabled={!carreras.length}>
            <option value="">Seleccione Carrera</option>
            {carreras.map(c => <option key={c.id} value={c.id}>{c.nombre}</option>)}
          </select>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded">
            Registrarse
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
