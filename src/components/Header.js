import React from 'react';
import { Link } from 'react-router-dom'; //este componente é como um <a> do HTML
import './Header.css';

// import { Container } from './styles';

import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

export default function header() {
  return (
    <header id="main-header">
      <div class="header-content">
        <Link to="/">
          <img src={logo} alt="InstaLuz" /> 
        </Link>
        <Link to="/new">
          <img src={camera} alt="Enviar Publicação" /> 
          </Link>
        </div>
    </header>
  );
}
