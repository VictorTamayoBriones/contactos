import React from 'react';
import styled from 'styled-components';
import Formulario from './components/Formulario.component';
import ListaContactos from './components/ListaContacto.component';
function App() {
  return (
    <Contenedor>
      <Titulo>CONTACTOS</Titulo>
      <Formulario/>
      <ListaContactos/>
    </Contenedor>
  );
}

const Contenedor = styled.div`
  margin: 40px;
  width: 90%;
  max-width: 400px;
  background: #fff;
  padding: 40px;
  border-radius: 5px;
  text-align: center;
`;
 
const Titulo = styled.h2`
  margin-bottom: 10px;
`;

export default App;
