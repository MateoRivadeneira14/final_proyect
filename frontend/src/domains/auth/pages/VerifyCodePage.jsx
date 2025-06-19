import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function VerifyCodePage() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const res = await axios.post('http://localhost:3002/api/verify', {
        email,
        code,
      });
      setSuccess('Código verificado con éxito. Ya puedes iniciar sesión.');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Error al verificar el código');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Verificar código</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-600 mb-2">{success}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="email" placeholder="Correo" value={email}
               onChange={(e) => setEmail(e.target.value)} className="p-2 border rounded" required />
        <input type="text" placeholder="Código de verificación" value={code}
               onChange={(e) => setCode(e.target.value)} className="p-2 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">Verificar</button>
      </form>
    </div>
  );
}
