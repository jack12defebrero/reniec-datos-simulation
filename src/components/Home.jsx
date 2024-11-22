// src/components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import '../styles/home.css';

const Home = () => {
  const navigate = useNavigate();

  // Función que maneja la redirección al formulario de ingreso de DNI del padre
  const handleGoToParentForm = () => {
    navigate('/parent-form'); // Redirige a la página de ParentForm
  };

  return (
    <div>
      {/* Sección hero */}
      <div className=" pt-8 grid grid-nogutter surface-0 text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
          <section>
            <span className="block text-6xl font-bold mb-1">
              Create the screens
            </span>
            <div className="text-6xl text-primary font-bold mb-3">
              your visitors deserve to see
            </div>
            <p className="mt-0 mb-4 text-700 line-height-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button label="Learn More" type="button" className="mr-3 p-button-raised " />
            <Button label="Live Demo" type="button" className="p-button-outlined" />
          </section>
        </div>
        <div className="col-12 md:col-6 overflow-hidden">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
            alt="hero-1"
            className="  pt-4 custom-image md:ml-auto block md:h-full"
          />
        </div>
      </div>

      {/* Sección informativa principal */}
      <div className="px-8 py-8 surface-card p-4 shadow-2 border-round p-mt-5 p-d-flex p-flex-column p-ai-center">
        <h1>Bienvenido a RENIEC</h1>
        <p>
          La plataforma RENIEC permite la consulta, actualización y renovación del DNI en línea de manera rápida y sencilla.
          Aquí podrás gestionar la información relacionada con tus datos personales y la de tus familiares.
        </p>
        <p>¡Comienza ahora a gestionar tu DNI y la de tus hijos de forma fácil!</p>

        {/* Pregunta sobre el DNI */}
        <div className="p-mt-4 p-d-flex p-flex-column p-ai-center">
          <h2>¿Se está venciendo el DNI de tu menor?</h2>
          <p>
            Si el DNI de tu hijo(a) está por vencer, ¡actualízalo aquí y evita las largas colas!
          </p>
        </div>

        {/* Botón para redirigir al formulario del padre */}
        <div className="p-mt-4 p-d-flex p-flex-column p-ai-center">
          <Button
            label="Ingresar DNI del Padre"
            icon="pi pi-user"
            className="p-button-primary p-mt-3"
            onClick={handleGoToParentForm}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
