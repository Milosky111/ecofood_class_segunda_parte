import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <main className="" style={{ minWidth: '320px', maxWidth: '400px', width: '100%' }}>
        <Outlet />
      </main>
    </div>
  );
}
