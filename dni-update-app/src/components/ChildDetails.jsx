import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const ChildDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const child = { id, name: 'Juan Pérez', birthYear: 2015, parentName: 'Carlos Pérez' };

  return (
    <div className="p-mt-5 p-d-flex p-flex-column p-ai-center">
      <Card title="Detalles del Hijo" style={{ width: '25rem' }}>
        <p><strong>Nombre:</strong> {child.name}</p>
        <p><strong>Año de Nacimiento:</strong> {child.birthYear}</p>
        <p><strong>Padre/Madre:</strong> {child.parentName}</p>
      </Card>
      <Button
        label="Actualizar Información"
        icon="pi pi-pencil"
        className="p-button-warning p-mt-3"
        onClick={() => navigate(`/update/${id}`)}
      />
    </div>
  );
};

export default ChildDetails;
