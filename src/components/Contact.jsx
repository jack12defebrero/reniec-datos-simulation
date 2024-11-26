// src/components/Contact.jsx
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';  // Importar Toast para alertas

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);  // Estado para controlar la alerta

  const toast = React.useRef(null);  // Referencia para el Toast

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      toast.current.show({ severity: 'success', summary: '¡Éxito!', detail: 'Tu mensaje ha sido enviado.', life: 3000 });
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(true);
    } else {
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Por favor, completa todos los campos.', life: 3000 });
    }
  };

  return (
    <div className="container mx-auto p-6 text-center">
      <Toast ref={toast} />  {/* Aquí se muestra la alerta */}
      
      <h1 className="mt-7 text-3xl font-bold text-blue-900 mb-4">Contáctanos</h1>
      <p className="text-lg text-gray-700 mb-6">
        Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nosotros. 
        Puedes escribirnos a nuestro correo electrónico o llamarnos a nuestra línea de atención al cliente.
      </p>

      <div className="card p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Formulario de Contacto</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="field">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600">Nombre</label>
            <InputText 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Ingresa tu nombre"
              className="w-full p-inputtext-sm border-2 border-gray-300 rounded-lg focus:border-blue-500 transition-all"
            />
          </div>

          <div className="field">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Correo Electrónico</label>
            <InputText 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Ingresa tu correo"
              className="w-full p-inputtext-sm border-2 border-gray-300 rounded-lg focus:border-blue-500 transition-all"
            />
          </div>

          <div className="field">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-600">Mensaje</label>
            <InputTextarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="Escribe tu mensaje"
              rows={5}
              className="w-full p-inputtextarea-sm border-2 border-gray-300 rounded-lg focus:border-blue-500 transition-all"
            />
          </div>

          <Button 
            type="submit" 
            label="Enviar Mensaje" 
            icon="pi pi-send" 
            className="p-button-sm p-button-success w-full mt-4 hover:bg-green-600 transition-colors"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
