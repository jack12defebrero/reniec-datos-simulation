import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Tooltip } from 'primereact/tooltip';
import ParentInfoTable from './ParentInfoTable'; // Importar el componente ParentInfoTable

// Función para generar un nombre aleatorio para los hijos
const generateRandomName = () => {
  const firstNames = ['Juanito', 'María', 'Carlosito', 'Anita', 'Luisito', 'Pedrito', 'Sofía', 'Gabriela'];
  const lastNames = ['Pérez', 'Gómez', 'Rodríguez', 'Hernández', 'López', 'Martínez'];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

// Función para generar la edad aleatoria de los hijos
const generateRandomAge = () => {
  const birthYear = Math.floor(Math.random() * (2023 - 2005 + 1)) + 2005;
  return birthYear;
};

const ChildList = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Usamos useLocation para acceder al estado de la navegación

  // Obtener la cantidad de hijos desde el estado de la navegación
  const childrenCount = location.state ? location.state.childrenCount : 0;

  const [children, setChildren] = useState([]);
  const [prevChildrenCount, setPrevChildrenCount] = useState(childrenCount); // Estado adicional para trackear el childrenCount

  // Cada vez que cambia el número de hijos, actualizamos el estado
  useEffect(() => {
    // Solo actualizamos si el childrenCount realmente ha cambiado
    if (childrenCount !== prevChildrenCount) {
      setPrevChildrenCount(childrenCount); // Actualizamos el valor anterior
      const generateChildren = () => {
        // Generamos los hijos comenzando desde 1
        return Array.from({ length: childrenCount }, (_, index) => {
          const birthYear = generateRandomAge();
          const age = new Date().getFullYear() - birthYear;
          return {
            id: Math.random().toString().replace('.', ''), // ID único y válido
            name: generateRandomName(),
            birthYear: birthYear,
            age: age,
            renovarDNI: false,
          };
        });
      };
      setChildren(generateChildren());
    }
  }, [childrenCount, prevChildrenCount]); // Se vuelve a ejecutar cuando cambia childrenCount o prevChildrenCount

  // Maneja el cambio en el checkbox para cada niño
  const handleCheckboxChange = (e, id) => {
    const updatedChildren = children.map((child) =>
      child.id === id ? { ...child, renovarDNI: e.target.checked } : child
    );
    setChildren(updatedChildren);
  };

  // Plantilla para mostrar el checkbox de renovación
  const renovarDNICheckboxTemplate = (rowData) => {
    const isMinor = rowData.age < 18; // Verificar si es menor de edad
    const validId = `renovarDNI-${rowData.id}`; // ID válido
    return (
      <div style={{ position: 'relative' }}>
        <Checkbox
          inputId={validId}
          checked={rowData.renovarDNI}
          onChange={(e) => handleCheckboxChange(e, rowData.id)}
          disabled={!isMinor} // Deshabilitar si no es menor de edad
          className={!isMinor ? 'p-invalid' : ''} // Añade clase para casilla deshabilitada
        />
        {!isMinor && (
          <i
            className="pi pi-times"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'red',
              fontSize: '1rem',
            }}
            tooltip="Este niño es mayor de edad"
            tooltipOptions={{ position: 'top' }}
          />
        )}
        <Tooltip target={`#${validId}`} />
      </div>
    );
  };

  // Lógica para el botón "Renovar DNI (Seleccionados)"
  const handleRenewDNI = () => {
    // Filtrar los niños seleccionados
    const selectedChildren = children.filter((child) => child.renovarDNI);

    if (selectedChildren.length === 0) {
      alert('Selecciona al menos un niño menor de edad para renovar el DNI.');
      return;
    }
    // Asegurarse de que la ruta de navegación sea correcta para el primer niño seleccionado
    navigate(`/renew-dni/${selectedChildren[0].id}`, {
      state: { child: selectedChildren[0] }, // Pasamos el objeto completo del niño
    });
  };

  // Plantilla para mostrar si es menor o mayor de edad
  const ageStatusTemplate = (rowData) => {
    const isMinor = rowData.age < 18;
    const statusText = isMinor ? 'Menor de Edad' : 'Mayor de Edad';
    const statusStyle = {
      backgroundColor: isMinor ? '#D4EDDA' : '#F8D7DA',
      color: isMinor ? '#155724' : '#721C24',
      padding: '0.25em 0.5em',
      borderRadius: '5px',
      textAlign: 'center',
      fontWeight: 'bold',
    };
    return <span style={statusStyle}>{statusText}</span>;
  };

  return (
    <div className="p-mt-5 p-d-flex p-flex-column p-ai-center">
      {/* Mostrar los detalles del padre/madre */}
      <ParentInfoTable />

      <h1>
        Lista de Hijos
        <span style={{ marginLeft: '20px', fontSize: '1rem', color: '#6c757d' }}>
          (Cantidad de Hijos: {childrenCount})
        </span>
      </h1>

      <DataTable value={children} stripedRows className="p-mt-3" responsiveLayout="scroll">
        <Column field="name" header="Nombre" />
        <Column field="birthYear" header="Año de Nacimiento" />
        <Column field="age" header="Edad" />
        <Column body={renovarDNICheckboxTemplate} header="Renovar DNI" />
        <Column body={ageStatusTemplate} header="Estado de Edad" />
      </DataTable>

      <div className="p-mt-5">
        {/* Botón que renueva el DNI de los niños seleccionados */}
        <Button
          label="Renovar DNI (Seleccionados)"
          icon="pi pi-refresh"
          className="p-button-success p-mt-3"
          onClick={handleRenewDNI}
        />
      </div>
    </div>
  );
};

export default ChildList;
