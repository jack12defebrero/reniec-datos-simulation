import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Obtener usuarios existentes de localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Validar si el correo ya existe
    if (existingUsers.some((user) => user.email === email)) {
      setError('Email already exists');
      return;
    }

    // Crear nuevo usuario
    const newUser = { username, email, password };
    existingUsers.push(newUser);

    // Guardar en localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Resetear el formulario
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
    alert('User registered successfully!');
  };

  return (
    <div className="flex align-items-center justify-content-center min-h-screen bg-gray-100">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Create an Account</div>
          <span className="text-600 font-medium line-height-3">Already have an account?</span>
          <a href="/" className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Log in here!</a>
        </div>

        <div>
          {error && <div className="text-red-600 font-medium mb-3">{error}</div>}

          <label htmlFor="username" className="block text-900 font-medium mb-2">
            Username
          </label>
          <InputText
            id="username"
            type="text"
            placeholder="Username"
            className="w-full mb-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Email
          </label>
          <InputText
            id="email"
            type="text"
            placeholder="Email address"
            className="w-full mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Password
          </label>
          <Password
            id="password"
            placeholder="Password"
            className="w-full mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            feedback={false} // Oculta sugerencias de contraseñas
          />

          <label htmlFor="confirmPassword" className="block text-900 font-medium mb-2">
            Confirm Password
          </label>
          <Password
            id="confirmPassword"
            placeholder="Confirm Password"
            className="w-full mb-3"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            feedback={false}
          />

          <Button label="Register" icon="pi pi-user-plus" className="w-full" onClick={handleRegister} />
        </div>
      </div>
    </div>
  );
};

export default Register;
