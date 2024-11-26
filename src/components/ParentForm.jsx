import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';  // Importar Toast
import ParentDniTable from './ParentDniTable';

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
  const toast = useRef(null);  // Referencia al Toast

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

    // Verificar si el campo DNI está vacío
    if (!dni.trim()) {
      toast.current.show({
        severity: 'warn',
        summary: 'Campo vacío',
        detail: 'Por favor, ingrese un DNI.',
        life: 3000,
      });
      return;
    }

    // Verificar si el DNI existe en los registrados
    const parentName = registeredDni[dni];
    if (parentName) {
      // Si el DNI es válido, redirigir y mostrar un mensaje de éxito
      toast.current.show({
        severity: 'success',
        summary: 'DNI válido',
        detail: `El padre/madre registrado es: ${parentName}`,
        life: 3000,
      });
      navigate('/children', { state: { parentName } }); // Pasar el nombre del padre a la lista de hijos
    } else {
      // Si el DNI no es válido, mostrar un mensaje de error
      toast.current.show({
        severity: 'error',
        summary: 'DNI inválido',
        detail: 'El DNI ingresado no está registrado.',
        life: 3000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="mt-7 text-2xl font-semibold text-center text-gray-800 mb-6">Actualización de DNI de Menores</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <InputText
              id="dni"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              placeholder="Ingrese su DNI"
              className="p-inputtext-lg w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button label="Ver Información" icon="pi pi-check" type="submit" className="w-full mt-5 p-button-primary p-button-lg" />
        </form>

        {/* Insertamos la tabla con los DNI registrados */}
        <ParentDniTable />
      </div>

      {/* Componente Toast para mostrar alertas */}
      <Toast ref={toast} />
    </div>
  );
};

export default ParentForm;
