import { Outlet, Link } from 'react-router-dom';
export default function AuthLayout() {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <aside className="bg-dark text-white p-3" style={{ width: '250px' }}>
        <h2 className="text-center mb-4">Mi Sistema</h2>
        <nav>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">🏠 Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/perfil">👤 Perfil</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Contenido principal */}
      <div className="flex-grow-1 p-4">
        <header className="mb-4 border-bottom pb-2">
          <h1>Panel de Usuario</h1>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
