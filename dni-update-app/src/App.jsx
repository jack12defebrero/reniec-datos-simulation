import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParentForm from './components/ParentForm';
import ChildList from './components/ChildList';
import ChildDetails from './components/ChildDetails';
import UpdateForm from './components/UpdateForm';
import NavBar from './components/NavBar'; // Barra de navegación
import WhatIsReniec from './components/WhatIsReniec'; // Información sobre RENIEC
import HowItWorks from './components/HowItWorks'; // Explicación de cómo funciona
import Contact from './components/Contact'; // Contacto
import Home from './components/Home'; // Página de Inicio
import RenewDNIForm from './components/RenewDNIForm';  // Agrega este import
import 'primereact/resources/themes/lara-light-blue/theme.css'; // Tema
import 'primereact/resources/primereact.min.css'; // Componentes
import 'primeicons/primeicons.css'; // Íconos
import 'primeflex/primeflex.css'; // Utilidades CSS

const App = () => {
  return (
    <Router>
      <NavBar />  {/* Barra de navegación */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* Página de Inicio */}
        <Route path="/parent-form" element={<ParentForm />} />  {/* Ruta para ParentForm */}
        <Route path="/children" element={<ChildList />} />
        <Route path="/child/:id" element={<ChildDetails />} />
        <Route path="/update/:id" element={<UpdateForm />} />
        <Route path="/what-is-reniec" element={<WhatIsReniec />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/renew-dni/:id" element={<RenewDNIForm />} /> {/* Añadir ruta para renovar DNI */}
      </Routes>
    </Router>
  );
};

export default App;
