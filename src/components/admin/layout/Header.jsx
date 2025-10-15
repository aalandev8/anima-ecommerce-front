import React from 'react';
import './Header.css';

const Header = () => {
  const handleLogout = () => {
    // lógica de logout
    console.log('Cerrar sesión');
  };

  return (
    <header className="header">
      <h1>Administración</h1>
      <div className="user">
        <span>Admin</span>
        <button onClick={handleLogout}>Salir</button>
      </div>
    </header>
  );
};

export default Header;
