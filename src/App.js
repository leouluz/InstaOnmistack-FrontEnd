import React from 'react';
import { BrowserRouter } from 'react-router-dom'// colocar em volta de todos componentes que usam as rotas

import Routes from './routes';
import Header from './components/Header'


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes />
    </BrowserRouter>
  );
}
export default App;
