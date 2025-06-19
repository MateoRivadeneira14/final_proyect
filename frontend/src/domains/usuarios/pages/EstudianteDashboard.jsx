import Navbar from '../../../components/Navbar';

import { useParams } from 'react-router-dom';

export default function EstudianteDashboard() {
  const { nick } = useParams();

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bienvenido, {nick}</h1>
        <p>Aquí puedes ver tu historial, hacer solicitudes y consultar recursos.</p>
      </div>
    </>
  );
}
