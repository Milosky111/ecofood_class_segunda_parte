import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Login from './pages/Login';
import Registro from './pages/Registro';
import NotFound from './pages/NotFound';
import AuthLayout from './components/AuthLayout';
import PublicLayout from './components/PublicLayout';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Layout para páginas públicas */}
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/" element={<Index />} />.
      </Route>

      {/* Layout para páginas protegidas */}
      <Route element={<AuthLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>

      {/* Página no encontrada */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}



//NO TOCAR