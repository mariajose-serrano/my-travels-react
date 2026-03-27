import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <nav className="bg-gray-900 text-white p-4 flex gap-6">
        <Link to="/" className="hover:underline">
          Inicio
        </Link>
        <Link to="/add" className="hover:underline">
          Añadir Viaje
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}
