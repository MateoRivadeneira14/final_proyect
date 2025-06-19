import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PasswordResetPage() {
  const [email, setEmail] = useState('');
  const [reset_code, setResetCode] = useState('');
  const [new_password, setNewPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await axios.post('http://localhost:3006/api/reset-password', {
        email,
        reset_code,
        new_password
      });
      setSuccess('Contraseña cambiada exitosamente.');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Error al cambiar la contraseña.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Cambiar contraseña</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-600 mb-2">{success}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="email" placeholder="Correo" value={email}
               onChange={(e) => setEmail(e.target.value)} className="p-2 border rounded" required />
        <input type="text" placeholder="Código de recuperación" value={reset_code}
               onChange={(e) => setResetCode(e.target.value)} className="p-2 border rounded" required />
        <input type="password" placeholder="Nueva contraseña" value={new_password}
               onChange={(e) => setNewPassword(e.target.value)} className="p-2 border rounded" required />
        <button type="submit" className="bg-green-600 text-white py-2 rounded">Cambiar</button>
      </form>
    </div>
  );
}
