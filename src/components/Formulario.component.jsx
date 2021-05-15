import React, {useState} from 'react';
import styled from 'styled-components';
import db from '../firebaseConfig';

const Formulario = () => {

    const[name, changeName]=useState('');
    const[mail, changeMail]=useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        db.collection('usuarios').add({
            nombre: name,
            correo: mail
        }).then(()=>{
            alert('Se agrego el contacto');
            changeName('');
            changeMail('');
            
        }).catch((error)=>{
            alert('Existio un error', error);
        })

    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <Input
                type="text"
                name="nombre"
                value={name}
                onChange={(e)=>changeName(e.target.value)}
                placeholder="Nombre"
            />
            <Input
                type="email"
                name="email"
                value={mail}
                onChange={(e)=>changeMail(e.target.value)}
                placeholder="Email"
            />
            <Boton type="submit">Agregar</Boton>
        </form>
    );
}

const Input = styled.input`
    padding: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2s ease all;
    outline: none;
    text-align: center;
    
    &:focus {
        border: 2px solid #3D76E9;
    }
`;
 
const Boton = styled.button`
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    transition: .3s ease all;
    outline: none;
    background: #C4C4C4;
    color: #fff;
    font-size: 12px;
 
    &:hover {
        background: #3D76E9;
    }
`;

export default Formulario;