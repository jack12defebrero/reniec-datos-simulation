import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import ParentInfoTable from './ParentInfoTable'; // Componente adicional

// Función para generar nombres aleatorios para los hijos
const generateRandomName = () => {
  const firstNames = ['Juanito', 'María', 'Carlosito', 'Anita', 'Luisito', 'Pedrito', 'Sofía', 'Gabriela'];
  const lastNames = ['Pérez', 'Gómez', 'Rodríguez', 'Hernández', 'López', 'Martínez'];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

// Función para generar edades aleatorias
const generateRandomAge = () => {
  const birthYear = Math.floor(Math.random() * (2023 - 2005 + 1)) + 2005;
  return birthYear;
};

// Obtener una imagen aleatoria de Pixabay
const getRandomImage = async () => {
  const apiKey = '26806310-9799765406e1766340f03eb4b'; // Sustituir con tu clave de API de Pixabay
  const url = `https://pixabay.com/api/?key=${apiKey}&q=people&image_type=photo&per_page=3`;
  const response = await fetch(url);
  const data = await response.json();
  const randomImage = data.hits[Math.floor(Math.random() * data.hits.length)];
  return randomImage.webformatURL; // Devuelve la URL de la imagen
};

const ChildList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const childrenCount = location.state ? location.state.childrenCount : 0;

  const [children, setChildren] = useState([]);
  const [layout, setLayout] = useState('grid');

  useEffect(() => {
    const generateChildren = async () => {
      const childrenArray = Array.from({ length: childrenCount }, (_, index) => {
        const birthYear = generateRandomAge();
        const age = new Date().getFullYear() - birthYear;
        return {
          id: Math.random().toString().replace('.', ''),
          name: generateRandomName(),
          birthYear,
          age,
          renovarDNI: false,
          imageUrl: '', // Imagen que se asignará después
        };
      });

      // Obtener imágenes aleatorias para los niños
      for (let child of childrenArray) {
        const imageUrl = await getRandomImage();
        child.imageUrl = imageUrl; // Asignamos la imagen aleatoria
      }

      setChildren(childrenArray);
    };

    generateChildren();
  }, [childrenCount]);

  const handleCheckboxChange = (e, id) => {
    const updatedChildren = children.map((child) =>
      child.id === id ? { ...child, renovarDNI: e.target.checked } : child
    );
    setChildren(updatedChildren);
  };

  const renovarDNICheckboxTemplate = (child) => (
    <Checkbox
      checked={child.renovarDNI}
      onChange={(e) => handleCheckboxChange(e, child.id)}
      disabled={child.age >= 18}
      className="p-checkbox-sm"
    />
  );

  const getStatusSeverity = (child) => (child.age < 18 ? 'success' : 'warning');

  const listItem = (child) => (
    <div className="col-12 md:col-6 xl:col-4">
      <div className="flex align-items-center p-4 border-round shadow-2 surface-card hover:shadow-xl transition-shadow duration-300">
        <div className="flex flex-column align-items-start gap-2 flex-1">
          <img
            src={child.imageUrl}
            alt={child.name}
            className="border-round"
            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
          />
          <h4 className="text-xl font-semibold">{child.name}</h4>
          <Tag value={child.age < 18 ? 'Menor de Edad' : 'Mayor de Edad'} severity={getStatusSeverity(child)} />
          <span className="text-sm text-gray-600">Año de Nacimiento: {child.birthYear}</span>
        </div>
        <div className="ml-4">{renovarDNICheckboxTemplate(child)}</div>
      </div>
    </div>
  );

  const gridItem = (child) => (
    <div className="col-12 sm:col-6 lg:col-4">
      <div className="p-4 border-round shadow-2 surface-card flex flex-column align-items-center gap-3 hover:shadow-xl transition-shadow duration-300">
        <img
          src={child.imageUrl}
          alt={child.name}
          className="border-round"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        <h4 className="text-lg font-semibold">{child.name}</h4>
        <Tag value={child.age < 18 ? 'Menor de Edad' : 'Mayor de Edad'} severity={getStatusSeverity(child)} />
        <span className="text-sm text-gray-600">Año de Nacimiento: {child.birthYear}</span>
        {renovarDNICheckboxTemplate(child)}
      </div>
    </div>
  );

  const itemTemplate = (child, layout) => (layout === 'list' ? listItem(child) : gridItem(child));

  const handleRenewDNI = () => {
    const selectedChildren = children.filter((child) => child.renovarDNI);
    if (selectedChildren.length === 0) {
      alert('Selecciona al menos un niño menor de edad para renovar el DNI.');
      return;
    }
    navigate(`/renew-dni/${selectedChildren[0].id}`, { state: { child: selectedChildren[0] } });
  };

  return (
    <div className="p-mt-5">
      <ParentInfoTable />
      <div className="p-d-flex p-ai-center p-jc-between">
        <h1 className=" mt-2 text-3xl font-semibold text-center text-gray-800 mb-6">Lista de Hijos</h1>
        <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} className="p-d-flex p-ai-center   text-center text-gray-800 mb-4" />
      </div>
      <DataView
        value={children}
        itemTemplate={(child) => itemTemplate(child, layout)}
        layout={layout}
        className="p-mt-3"
      />
      <div className="p-mt-4 flex justify-center">
        <Button
          label="Renovar DNI (Seleccionados)"
          icon="pi pi-refresh"
          onClick={handleRenewDNI}
          className="p-button-rounded p-button-info p-button-lg"
        />
      </div>
    </div>
  );
};

export default ChildList;
