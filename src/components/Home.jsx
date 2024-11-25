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
            Bienvenido a RENIEC
            </span>
            <p className="mt-0 mb-4 text-700 line-height-3">
            La plataforma RENIEC permite la consulta, actualización y renovación del DNI en línea de manera rápida y sencilla. Aquí podrás gestionar la información relacionada con tus datos personales y la de tus familiares.

¡Comienza ahora a gestionar tu DNI y la de tus hijos de forma fácil!
            </p>
            <div className="text-6xl text-primary font-bold mb-3">
            ¿Se está venciendo el DNI de tu menor?
            </div>
            <p className="mt-0 mb-4 text-700 line-height-3">
            Si el DNI de tu hijo(a) está por vencer, ¡actualízalo aquí y evita las largas colas!
            </p>
             {/* Botón para redirigir al formulario del padre */}
        <div className="p-mt-4 p-d-flex p-flex-column p-ai-center">
          <Button
            label="Ingresar DNI del Padre"
            icon="pi pi-user"
            className="p-button-primary p-mt-3"
            onClick={handleGoToParentForm}
          />
        </div>
        
        {/* <Button label="Learn More" type="button" className="mr-3 p-button-raised " /> */}
        {/*   <Button label="Live Demo" type="button" className="p-button-outlined" />*/}
          </section>
        </div>
        <div className="col-12 md:col-6 overflow-hidden">
          <img
            src="https://www.reniec.gob.pe/portal/images/salaPrensa/noticias/notaprensa/NP-613-2015.jpg"
            alt="hero-1"
            className="  pt-4 custom-image md:ml-auto block md:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
