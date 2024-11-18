// src/components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

const Home = () => {
  const navigate = useNavigate();

  // Función que maneja la redirección al formulario de ingreso de DNI del padre
  const handleGoToParentForm = () => {
    navigate('/parent-form');  // Redirige a la página de ParentForm
  };

  return (
    <div className=" px-8 py-8 surface-card p-4 shadow-2 border-round
    p-mt-5 p-d-flex p-flex-column p-ai-center">
      <h1>Bienvenido a RENIEC</h1>
      <p>
        La plataforma RENIEC permite la consulta, actualización y renovación del DNI en línea de manera rápida y sencilla. 
        Aquí podrás gestionar la información relacionada con tus datos personales y la de tus familiares.
      </p>
      <p>
        ¡Comienza ahora a gestionar tu DNI y la de tus hijos de forma fácil!
      </p>
      
      {/* Nueva pregunta sobre el DNI */}
      <div className="p-mt-4 p-d-flex p-flex-column p-ai-center">
        <h2>¿Se está venciendo el DNI de tu menor?</h2>
        <p>
          Si el DNI de tu hijo(a) está por vencer, ¡actualízalo aquí y evita las largas colas!
        </p>
      </div>

      {/* Agregar otro botón que redirige a ParentForm */}
      <div className="p-mt-4 p-d-flex p-flex-column p-ai-center">
        <Button 
          label="Ingresar DNI del Padre" 
          icon="pi pi-user" 
          className="p-button-primary p-mt-3"
          onClick={handleGoToParentForm} 
        />
      </div>
    </div>
  );
};

export default Home;
