import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Usar useLocation para obtener el estado de la navegación
import { FileUpload } from 'primereact/fileupload';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const RenewDNIForm = () => {
  const location = useLocation();  // Obtener el estado de la navegación
  const { child } = location.state || {};  // Obtener el objeto del niño desde el estado
  const [photos, setPhotos] = useState([]);
  const [fingerprints, setFingerprints] = useState([]);
  const toast = React.useRef(null); // Usar Toast para alertas

  // Verificar si el niño está disponible en el estado
  if (!child) {
    return <p>No se encontraron datos del niño.</p>;
  }

  // Manejar la carga de fotos
  const handlePhotoUpload = (e) => {
    setPhotos(e.files);  // Guarda los archivos de fotos
  };

  // Manejar la carga de huellas dactilares
  const handleFingerprintUpload = (e) => {
    setFingerprints(e.files);  // Guarda los archivos de huellas
  };

  // Validar y enviar el formulario
  const handleSubmit = () => {
    if (photos.length === 0 || fingerprints.length === 0) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Por favor, sube todos los documentos necesarios.', life: 3000 });
      return;
    }
    if (photos.length > 5 || fingerprints.length > 10) {
      toast.current.show({ severity: 'warn', summary: 'Advertencia', detail: 'Has superado el número máximo de archivos.', life: 3000 });
      return;
    }

    // Aquí se puede enviar los archivos al servidor
    toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'DNI Renovado con éxito!', life: 3000 });
  };

  return (
    <div className="p-mt-5 p-d-flex p-flex-column p-ai-center p-jc-center min-h-screen">
      {/* Mensajes de Toast */}
      <Toast ref={toast} />

      <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Renovar DNI</h1>

      {/* Mostrar los datos del niño */}
      <div className="  mt-8 text-center mb-4">
        <h3 className="text-xl font-semibold">{`Nombre: ${child.name}`}</h3>
        <p className="text-lg">{`Fecha de nacimiento: ${child.birthYear}`}</p>
        <p className="text-lg">{`Edad: ${child.age}`}</p>
      </div>

      {/* Carga de fotos */}
      <div className="p-mt-3 mb-6 w-full max-w-2xl mx-auto">
        <h4 className="font-semibold text-lg text-center">Sube Fotos (máximo 5 archivos)</h4>
        <FileUpload
          name="photos"
          customUpload
          uploadHandler={handlePhotoUpload}
          accept="image/*"
          maxFileSize={1000000}  // Tamaño máximo del archivo en bytes (1MB)
          multiple
          maxFiles={5}  // Limitar a 5 archivos
          chooseLabel="Selecciona fotos"
          cancelLabel="Cancelar"
          uploadLabel="Subir"
          className="w-full"
        />
      </div>

      {/* Carga de huellas dactilares */}
      <div className="p-mt-3 mb-6 w-full max-w-2xl mx-auto">
        <h4 className="font-semibold text-lg text-center">Sube Huellas Dactilares (máximo 10 archivos)</h4>
        <FileUpload
          name="fingerprints"
          customUpload
          uploadHandler={handleFingerprintUpload}
          accept="image/*"
          maxFileSize={1000000}  // Tamaño máximo del archivo en bytes (1MB)
          multiple
          maxFiles={10}  // Limitar a 10 archivos
          chooseLabel="Selecciona huellas"
          cancelLabel="Cancelar"
          uploadLabel="Subir"
          className="w-full"
        />
      </div>

      {/* Botón de enviar */}
      <div className="p-mt-5 text-center">
        <Button 
          label="Renovar DNI" 
          icon="pi pi-refresh" 
          className="p-button-lg p-button-success"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default RenewDNIForm;
