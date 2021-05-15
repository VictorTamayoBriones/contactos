import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import db from '../firebaseConfig';
import Contacto from './Contacto.component';

const ListaContactos = () => {
    const[contactos, changeContactos]=useState([]);

    useEffect(()=>{
        db.collection('usuarios').onSnapshot((snapshot)=>{
            changeContactos(snapshot.docs.map((documento)=>{
                return {...documento.data(), id: documento.id}
            }))
        })
    }, [])

    return (
        contactos.length > 0 &&  
        <ContenedorContactos>
            {contactos.map((contacto)=>(
                <Contacto
                    key={contacto.id}
                    id={contacto.id}
                    nombre={contacto.nombre}
                    correo={contacto.correo}
                />
            ))}
        </ContenedorContactos>
    );
}

const ContenedorContactos = styled.div`
    margin-top: 40px;
`;

export default ListaContactos;