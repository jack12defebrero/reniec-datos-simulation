// src/components/HowItWorks.jsx
import React from 'react';
import { Button } from 'primereact/button'; // Importar el botón de PrimeReact
import 'primeicons/primeicons.css'; // Iconos de PrimeIcons

const HowItWorks = () => {
  return (
    <div className="container mx-auto p-6 space-y-6 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">¿Cómo Funciona RENIEC?</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="card p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">¿Qué es RENIEC?</h3>
          <p className="text-gray-700 text-lg">
            RENIEC es la institución encargada de registrar los actos de estado civil y proporcionar la identidad oficial
            a todos los ciudadanos peruanos mediante el Documento Nacional de Identidad (DNI).
          </p>
        </div>

        <div className="card p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">¿Por qué es importante?</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>RENIEC asegura la identidad oficial de los ciudadanos.</li>
            <li>El DNI es fundamental para acceder a servicios públicos, votar y realizar trámites legales.</li>
            <li>Facilita la renovación y actualización del DNI de manera eficiente y segura.</li>
          </ul>
        </div>

        <div className="card p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">¿Cómo Funciona?</h3>
          <p className="text-gray-700 text-lg">
            RENIEC permite realizar los siguientes trámites:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>Registro de nacimientos, matrimonios y defunciones.</li>
            <li>Emisión de nuevos DNIs para ciudadanos.</li>
            <li>Actualización o renovación del DNI para adultos y menores de edad.</li>
          </ul>
        </div>
      </div>

      <Button
        label="Más Información"
        icon="pi pi-info-circle"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700"
      />
    </div>
  );
};

export default HowItWorks;