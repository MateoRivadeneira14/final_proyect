import Navbar from '../../../components/Navbar';

import { useParams } from 'react-router-dom';

export default function AdminDashboard() {
  const { nick } = useParams();

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Panel del Administrador</h1>
        <p>Desde aquí puedes gestionar usuarios, roles y accesos.</p>
      </div>
    </>
  );
}
