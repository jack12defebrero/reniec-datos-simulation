import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import api from './api';

const UpdateChildInfo = ({ dni, childId, onUpdate }) => {
    const [name, setName] = useState('');
    const [birthYear, setBirthYear] = useState('');

    const updateChild = async () => {
        try {
            await api.put(`/parents/${dni}/child/${childId}`, { name, birthYear });
            alert('Información del hijo actualizada correctamente.');
            onUpdate();
        } catch (err) {
            console.error('Error actualizando la información del hijo:', err);
        }
    };

    return (
        <div className="card">
            <h3>Actualizar Información del Hijo</h3>
            <div className="p-field">
                <label htmlFor="name">Nombre:</label>
                <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="p-field">
                <label htmlFor="birthYear">Año de Nacimiento:</label>
                <InputText id="birthYear" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} />
            </div>
            <Button label="Actualizar" onClick={updateChild} className="p-mt-2" />
        </div>
    );
};

export default UpdateChildInfo;
