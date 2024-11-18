import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Usar useLocation para obtener el estado de la navegación
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';

const RenewDNIForm = () => {
  const location = useLocation();  // Obtener el estado de la navegación
  const { child } = location.state || {};  // Obtener el objeto del niño desde el estado
  const [photos, setPhotos] = useState([]);
  const [fingerprints, setFingerprints] = useState([]);

  // Verificar si el niño está disponible en el estado
  if (!child) {
    return <p>No se encontraron datos del niño.</p>;
  }

  const handlePhotoUpload = (e) => {
    setPhotos(e.files);  // Guarda los archivos de fotos
  };

  const handleFingerprintUpload = (e) => {
    setFingerprints(e.files);  // Guarda los archivos de huellas dactilares
  };

  const handleSubmit = () => {
    if (photos.length > 0 && fingerprints.length > 0) {
      alert('DNI Renovado con éxito!');
      // Aquí puedes enviar los archivos al servidor para guardarlos
    } else {
      alert('Por favor, sube todos los documentos necesarios.');
    }
  };

  return (
    <div className="p-mt-5 p-d-flex p-flex-column p-ai-center">
      <h1>Renovar DNI</h1>
      {/* Mostrar los datos del niño */}
      <h3>{`Nombre: ${child.name}`}</h3>
      <p>{`Fecha de nacimiento: ${child.birthYear}`}</p>
      <p>{`Edad: ${child.age}`}</p>

      <div className="p-mt-3">
        <h4>Sube Fotos (máximo 5 archivos)</h4>
        <FileUpload
          name="photos"
          customUpload
          uploadHandler={handlePhotoUpload}
          accept="image/*"
          maxFileSize={1000000} // Tamaño máximo del archivo en bytes (1MB)
          multiple
          maxFiles={5}  // Limitar a 5 archivos
        />
      </div>

      <div className="p-mt-3">
        <h4>Sube Huellas Dactilares (máximo 10 archivos)</h4>
        <FileUpload
          name="fingerprints"
          customUpload
          uploadHandler={handleFingerprintUpload}
          accept="image/*"
          maxFileSize={1000000} // Tamaño máximo del archivo en bytes (1MB)
          multiple
          maxFiles={10}  // Limitar a 10 archivos
        />
      </div>

      <div className="p-mt-5">
        <Button label="Renovar DNI" icon="pi pi-refresh" className="p-button-success" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default RenewDNIForm;
