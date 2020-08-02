import React from 'react';
import './Menu.css';
import Logo from '../../assets/img/Logo.png';
import Button from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="SamFlix"/>
      </a>

      <Button className="ButtonLink" href="/">
        Novo video
      </Button >
    </nav>
  );
}


export default Menu;