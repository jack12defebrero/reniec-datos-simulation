import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import UpdateChildInfo from './UpdateChildInfo'; // Importa el componente para actualizar hijos
import api from '../api'; // Importa la configuración de Axios

const ParentInfo = () => {
    const [dni, setDni] = useState('');
    const [parentData, setParentData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Estado de carga

    // Función para obtener información del padre
    const fetchParentData = async () => {
        if (!dni) {
            setError('Por favor ingrese un DNI válido.');
            return;
        }

        setLoading(true); // Empieza la carga
        try {
            // Realiza la solicitud GET a la API usando la instancia de Axios
            const response = await api.get(`/parents/${dni}`);
            setParentData(response.data);  // Guarda los datos obtenidos de la API
            setError('');
        } catch (err) {
            setError('No se encontró información para este DNI.');
            setParentData(null);
        } finally {
            setLoading(false); // Termina la carga
        }
    };

    return (
        <div className="card p-4">
            <h3 className="p-mb-3">Buscar Información del Padre</h3>
            <div className="p-field">
                <label htmlFor="dni" className="p-mb-2">DNI del Padre:</label>
                <InputText
                    id="dni"
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    placeholder="Ingrese el DNI"
                    className="p-inputtext-lg"
                />
            </div>
            <Button 
                label="Buscar" 
                onClick={fetchParentData} 
                className="p-mt-3" 
                disabled={loading} 
            />

            {loading && <p style={{ color: 'blue', marginTop: '1rem' }}>Cargando...</p>}
            {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
            
            {parentData && (
                <div className="p-mt-4">
                    <h4>Información del Padre</h4>
                    <p><strong>Nombre:</strong> {parentData.name}</p>

                    <h5 className="p-mt-3">Hijos:</h5>
                    <ul className="p-pl-3">
                        {parentData.children.map((child) => (
                            <li key={child._id} className="p-mb-3">
                                <p>
                                    <strong>Nombre:</strong> {child.name}, 
                                    <strong> Año de Nacimiento:</strong> {child.birthYear}
                                </p>
                                {/* Componente para actualizar información del hijo */}
                                <UpdateChildInfo
                                    dni={dni}
                                    childId={child._id}
                                    onUpdate={fetchParentData} // Refresca los datos después de la actualización
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('DNI ingresado:', dni);  // Verifica el valor del DNI
  
    if (dni.trim() === '') {
      alert('Por favor ingrese un DNI válido');
      return;
    }
}  
export default ParentInfo;
