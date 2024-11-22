// src/components/NavBar.jsx
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      command: () => navigate('/') // Ruta para volver al inicio
    },
    {
      label: '¿Qué es RENIEC?',
      icon: 'pi pi-info-circle',
      command: () => navigate('/what-is-reniec') // Ruta para información sobre RENIEC
    },
    {
      label: 'Cómo Funciona',
      icon: 'pi pi-cogs',
      command: () => navigate('/how-it-works') // Ruta para explicación de la funcionalidad de la plataforma
    },
    {
      label: 'Contáctanos',
      icon: 'pi pi-phone',
      command: () => navigate('/contact') // Ruta de contacto
    }
  ];

  const start = (
    <img alt="RENIEC Logo" src="https://www.reniec.gob.pe/portal/images/logo_escudo.gif" style={{ width: '150px', marginRight: '40px' }} />
  );

  return (
    <div className=" fixed top-0 left-0 w-full z-50">
      <Menubar model={items} start={start} />
    </div>
  );
};

export default NavBar;
