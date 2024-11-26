import React from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';  // Importamos el Toast para mostrar notificaciones
import { useRef } from 'react';

const ParentDniTable = () => {
  const toast = useRef(null);

  const dniList = ['12345678', '87654321', '11223344', '22334455', '33445566'];

  const handleCopy = (dni) => {
    navigator.clipboard.writeText(dni).then(() => {
      toast.current.show({ severity: 'success', summary: '¡Copiado!', detail: `DNI ${dni} copiado al portapapeles.`, life: 3000 });
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-pastel-green p-3 max-w-4xl mx-auto rounded-lg shadow-lg w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">DNI Registrados Localmente</h2>
        <Toast ref={toast} />
        <table className="table-auto w-full ">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left p-2">DNI</th>
              <th className="text-left p-2">Acción</th>
            </tr>
          </thead>
          <tbody>
            {dniList.map((dni, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="p-2">{dni}</td>
                <td className="p-2">
                  <Button
                    label="Copiar"
                    icon="pi pi-copy"
                    onClick={() => handleCopy(dni)}
                    className="p-button-sm p-button-outlined p-button-info"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParentDniTable;
