
import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaBuilding } from 'react-icons/fa';

export default function RegisterChoicePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full text-center">
        <h1 className="text-2xl font-bold mb-6 text-indigo-700">¿Cómo deseas registrarte?</h1>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div
            onClick={() => navigate('/register/estudiante')}
            className="cursor-pointer border rounded-lg p-6 flex-1 hover:bg-indigo-50 transition"
          >
            <FaUserGraduate className="text-4xl mx-auto text-indigo-600 mb-2" />
            <h2 className="text-xl font-semibold text-gray-800">Como Estudiante</h2>
            <p className="text-sm text-gray-600 mt-1">Accede a vacantes y gestiona tus prácticas.</p>
          </div>

          <div
            onClick={() => navigate('/register/empresa')}
            className="cursor-pointer border rounded-lg p-6 flex-1 hover:bg-indigo-50 transition"
          >
            <FaBuilding className="text-4xl mx-auto text-indigo-600 mb-2" />
            <h2 className="text-xl font-semibold text-gray-800">Como Empresa</h2>
            <p className="text-sm text-gray-600 mt-1">Publica vacantes y encuentra talentos.</p>
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-600">
          <a href="/" className="text-indigo-600 hover:underline">Volver al inicio</a>
        </div>
      </div>
    </div>
  );
}
