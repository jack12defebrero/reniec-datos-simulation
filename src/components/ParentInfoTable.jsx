import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

// Función para generar nombre aleatorio
const generateRandomName = () => {
  const firstNames = ['Juan', 'María', 'Carlos', 'Ana', 'Luis', 'Pedro', 'Sofía', 'Gabriela'];
  const lastNames = ['Pérez', 'Gómez', 'Rodríguez', 'Hernández', 'López', 'Martínez'];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

// Función para generar la edad aleatoria de la madre
const generateRandomAge = () => {
  const birthYear = Math.floor(Math.random() * (1980 - 1950 + 1)) + 1950;
  return birthYear;
};

// Función para generar el lugar aleatorio
const generateRandomPlace = () => {
  const places = [
    { city: 'Lima', districts: ['Miraflores', 'San Isidro', 'Barranco', 'Surco', 'San Borja'] },
    { city: 'Arequipa', districts: ['Yanahuara', 'Cayma', 'Sachaca', 'José Luis Bustamante y Rivero'] },
    { city: 'Cusco', districts: ['Cusco', 'Santiago', 'San Sebastián', 'San Jerónimo'] },
    { city: 'Trujillo', districts: ['Trujillo', 'La Esperanza', 'El Porvenir', 'Victor Larco'] },
  ];

  const randomPlace = places[Math.floor(Math.random() * places.length)];
  const randomDistrict = randomPlace.districts[Math.floor(Math.random() * randomPlace.districts.length)];
  return `${randomPlace.city} - ${randomDistrict}`;
};

const ParentInfoTable = () => {
  const navigate = useNavigate();
  const [motherDetails, setMotherDetails] = useState(null);

  useEffect(() => {
    const generatedDetails = {
      fullName: generateRandomName(),
      dni: `${Math.floor(Math.random() * 100000000)}`,
      birthDate: `${generateRandomAge()}/${Math.floor(Math.random() * 12) + 1}/${Math.floor(Math.random() * 31) + 1}`,
      birthPlace: generateRandomPlace(),
      age: new Date().getFullYear() - generateRandomAge(),
      livingPlace: generateRandomPlace(),
      childrenCount: Math.floor(Math.random() * 5) + 1,
      spouse: generateRandomName(),
    };
    setMotherDetails(generatedDetails);
  }, []);

  const goToChildList = () => {
    navigate('/children', { state: { childrenCount: motherDetails.childrenCount } });
  };

  if (!motherDetails) return <p className="text-center text-xl">Cargando...</p>;

  return (
    <div className="p-6 bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <h2 className=" mt-7 text-3xl font-semibold text-center text-gray-800 mb-6">Detalles de la Madre</h2>
      <DataTable value={[motherDetails]} stripedRows responsiveLayout="scroll" className="p-shadow-2">
        <Column field="fullName" header="Nombre Completo" className="text-sm font-medium text-gray-800" />
        <Column field="dni" header="DNI" className="text-sm font-medium text-gray-800" />
        <Column field="birthDate" header="Fecha de Nacimiento" className="text-sm font-medium text-gray-800" />
        <Column field="age" header="Edad" className="text-sm font-medium text-gray-800" />
        <Column field="birthPlace" header="Lugar de Nacimiento" className="text-sm font-medium text-gray-800" />
        <Column field="livingPlace" header="Lugar de Vivienda" className="text-sm font-medium text-gray-800" />
        <Column field="childrenCount" header="Cantidad de Hijos" className="text-sm font-medium text-gray-800" />
        <Column field="spouse" header="Esposo/a" className="text-sm font-medium text-gray-800" />
      </DataTable>

      <div className="flex justify-center mt-5">
        <Button label="Ver Hijos" icon="pi pi-arrow-right" className="p-button-rounded p-button-info p-button-lg" onClick={goToChildList} />
      </div>
    </div>
  );
};

export default ParentInfoTable;
