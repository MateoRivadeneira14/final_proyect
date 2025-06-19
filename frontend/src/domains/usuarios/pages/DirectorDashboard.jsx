import Navbar from '../../../components/Navbar';

import { useParams } from 'react-router-dom';

export default function DirectorDashboard() {
  const { nick } = useParams();

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Panel del Director</h1>
        <p>Administra contenido y responde a las peticiones de los estudiantes.</p>
      </div>
    </>
  );
}
