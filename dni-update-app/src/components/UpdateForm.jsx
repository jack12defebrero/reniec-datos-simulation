import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const UpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [child, setChild] = useState({
    name: 'Juan Pérez',
    birthYear: 2015,
    parentName: 'Carlos Pérez',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Información actualizada correctamente.');
    navigate('/children');
  };

  return (
    <div className="p-mt-5 p-d-flex p-flex-column p-ai-center">
      <h1>Actualizar Información</h1>
      <form onSubmit={handleSubmit} className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-12">
          <label htmlFor="name">Nombre</label>
          <InputText
            id="name"
            value={child.name}
            onChange={(e) => setChild({ ...child, name: e.target.value })}
          />
        </div>
        <div className="p-field p-col-12">
          <label htmlFor="birthYear">Año de Nacimiento</label>
          <InputText
            id="birthYear"
            value={child.birthYear}
            onChange={(e) => setChild({ ...child, birthYear: e.target.value })}
          />
        </div>
        <div className="p-field p-col-12">
          <label htmlFor="parentName">Nombre del Padre/Madre</label>
          <InputText
            id="parentName"
            value={child.parentName}
            onChange={(e) => setChild({ ...child, parentName: e.target.value })}
          />
        </div>
        <Button label="Guardar Cambios" icon="pi pi-check" type="submit" className="p-button-success p-mt-3" />
      </form>
    </div>
  );
};

export default UpdateForm;
