import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Link } from 'react-router-dom'; // Importa el componente Link

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSignIn = () => {
    // Aquí puedes validar el login con credenciales estáticas o integrarlo con tu backend
    if (email === 'admin@example.com' && password === 'password123') {
      localStorage.setItem('isAuthenticated', 'true');
      onLogin(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="flex align-items-center justify-content-center min-h-screen bg-gray-100">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <img
            src="https://www.reniec.gob.pe/portal/images/logo_escudo.gif" style={{ width: '150px', marginRight: '40px' }}
            alt="Reniec"
            height={50}
            className="mb-3"
          />
          <div className="text-900 text-3xl font-medium mb-3">Bienvenido al sistema de la RENIEC</div>
          <span className="text-600 font-medium line-height-3">¿No tienes una cuenta? </span>
          {/* Agrega el enlace al registro */}
          <Link to="/register" className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
            ¡Creala hoy!
          </Link>
        </div>

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Correo electrónico
          </label>
          <InputText
            id="email"
            type="text"
            placeholder="Correo electrónico"
            className="w-full mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Contraseña
          </label>
          <InputText
            id="password"
            type="password"
            placeholder="Contraseña"
            className="w-full mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center">
              <Checkbox
                id="rememberme"
                onChange={(e) => setChecked(e.checked)}
                checked={checked}
                className="mr-2"
              />
              <label htmlFor="rememberme">Recuerdame</label>
            </div>
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
             Olvidaste tu contraseña?
            </a>
          </div>

          <Button label="Inciar Sesión" icon="pi pi-user" className="w-full" onClick={handleSignIn} />

          <p>correo: admin@example.com</p>
          <p>contraseña: password123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
