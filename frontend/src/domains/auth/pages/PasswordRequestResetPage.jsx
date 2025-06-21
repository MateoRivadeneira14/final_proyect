
import { useState } from 'react';
import axios from 'axios';

export default function PasswordRequestResetPage() {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setMensaje('');
    try {
      const res = await axios.post('http://localhost:3006/api/request-reset', { email });
      setMensaje('Código de restablecimiento enviado a tu correo.');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al solicitar código');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-700">Solicitar Restablecimiento</h1>
        {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}
        {mensaje && <p className="text-green-600 mb-4 text-sm text-center">{mensaje}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="Correo" className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded">
            Enviar código
          </button>
        </form>
      </div>
    </div>
  );
}
