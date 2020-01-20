import React from 'react'; // Para usar o JSX é necessario importar o react - mesmo que não esteja usando
import ReactDOM from 'react-dom'; // Dom é a integração do react com o browser
import App from './App';
import './global.css';

ReactDOM.render( < App / > , document.getElementById('root')); // Pega o arquivo App.js e joga dentro da div com ID = root