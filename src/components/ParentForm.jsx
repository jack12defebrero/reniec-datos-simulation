import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

// Función para generar un nombre aleatorio para los padres
const generateRandomName = () => {
  const firstNames = ['Juan', 'María', 'Carlos', 'Ana', 'Luis', 'Pedro', 'Sofía', 'Gabriela'];
  const lastNames = ['Pérez', 'Gómez', 'Rodríguez', 'Hernández', 'López', 'Martínez'];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

const ParentForm = () => {
  const [dni, setDni] = useState('');
  const navigate = useNavigate();

  // DNI válidos registrados con nombres de padres aleatorios
  const registeredDni = {
    '12345678': generateRandomName(),
    '87654321': generateRandomName(),
    '11223344': generateRandomName(),
    '22334455': generateRandomName(),
    '33445566': generateRandomName(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar si el DNI existe en los registrados
    const parentName = registeredDni[dni];
    if (parentName) {
      navigate('/children', { state: { parentName } }); // Pasar el nombre del padre a la lista de hijos
    } else {
      alert('DNI inválido o no registrado.');
    }
  };

  return (
    <div className="p-d-flex p-flex-column p-ai-center p-mt-5">
      <h1>Actualización de DNI de Menores</h1>
      <form onSubmit={handleSubmit} className="p-d-flex p-flex-column p-ai-center">
        <span className="p-float-label p-mb-3">
          <InputText
            id="dni"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
          <label htmlFor="dni">Ingrese su DNI</label>
        </span>
        <Button label="Ver Información" icon="pi pi-check" type="submit" className="p-button-primary" />
      </form>
    </div>
  );
};

export default ParentForm;
