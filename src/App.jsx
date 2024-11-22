import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ParentForm from './components/ParentForm';
import ChildList from './components/ChildList';
import ChildDetails from './components/ChildDetails';
import UpdateForm from './components/UpdateForm';
import NavBar from './components/NavBar';
import WhatIsReniec from './components/WhatIsReniec';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Home from './components/Home';
import RenewDNIForm from './components/RenewDNIForm';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register'; // Asegúrate de crear este componente
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
    if (!status) {
      localStorage.removeItem('isAuthenticated'); // Limpiar estado de autenticación al cerrar sesión
    }
  };

  // Componente para rutas protegidas
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      {isAuthenticated && <NavBar />}
      <Routes>
        {/* Ruta de login: si está autenticado, redirige al inicio */}
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
          }
        />

        {/* Ruta de registro: si está autenticado, redirige al inicio */}
        <Route
          path="/register"
          element={
            isAuthenticated ? <Navigate to="/" /> : <Register />
          }
        />

        {/* Rutas protegidas */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/parent-form"
          element={
            <ProtectedRoute>
              <ParentForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/children"
          element={
            <ProtectedRoute>
              <ChildList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/child/:id"
          element={
            <ProtectedRoute>
              <ChildDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update/:id"
          element={
            <ProtectedRoute>
              <UpdateForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/what-is-reniec"
          element={
            <ProtectedRoute>
              <WhatIsReniec />
            </ProtectedRoute>
          }
        />
        <Route
          path="/how-it-works"
          element={
            <ProtectedRoute>
              <HowItWorks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/renew-dni/:id"
          element={
            <ProtectedRoute>
              <RenewDNIForm />
            </ProtectedRoute>
          }
        />
      </Routes>
      {isAuthenticated && <Footer />}
    </Router>
  );
};

export default App;
