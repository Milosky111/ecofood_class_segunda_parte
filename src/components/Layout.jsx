import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="container mt-3">
      <header>
        <h1>Bienvenido a EcoFood</h1>
        <hr />
      </header>
      <main>
        <Outlet /> {/* Aquí se renderiza la ruta hija */}
      </main>
    </div>
  );
}
