import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PasswordRequestResetPage() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await axios.post('http://localhost:3005/api/request-reset', { email });
      setSuccess('Se envió un código de recuperación a tu correo.');
      setTimeout(() => navigate('/reset'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Error al solicitar el código.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Recuperar contraseña</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-600 mb-2">{success}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="email" placeholder="Correo" value={email}
               onChange={(e) => setEmail(e.target.value)} className="p-2 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">Solicitar código</button>
      </form>
    </div>
  );
}
