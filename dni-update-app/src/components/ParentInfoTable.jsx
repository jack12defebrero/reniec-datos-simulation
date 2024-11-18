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

  if (!motherDetails) return <p>Cargando...</p>;

  return (
    <div className="p-mt-5">
      <h2>Detalles de la Madre</h2>
      <DataTable value={[motherDetails]} stripedRows responsiveLayout="scroll">
        <Column field="fullName" header="Nombre Completo" />
        <Column field="dni" header="DNI" />
        <Column field="birthDate" header="Fecha de Nacimiento" />
        <Column field="age" header="Edad" />
        <Column field="birthPlace" header="Lugar de Nacimiento" />
        <Column field="livingPlace" header="Lugar de Vivienda" />
        <Column field="childrenCount" header="Cantidad de Hijos" />
        <Column field="spouse" header="Esposo/a" />
      </DataTable>

      <Button label="Ver Hijos" className="p-mt-3" onClick={goToChildList} />
    </div>
  );
};

export default ParentInfoTable;
