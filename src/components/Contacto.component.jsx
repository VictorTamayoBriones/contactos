import React,{useState} from 'react';
import styled from 'styled-components';
import db from '../firebaseConfig';

const Contacto = ( {id, nombre, correo} ) => {
    const[editando, changeEditando]=useState(false);
    const[newName, changeNewName]=useState(nombre);
    const[newMail, changeNewMail]=useState(correo);

    const actualizarContacto = (e)=>{
        e.preventDefault();

        db.collection('usuarios').doc(id).update({
            nombre: newName,
            correo: newMail
        }).then(()=>{

            alert('Contacto actualizado');
            changeEditando(false);

        }).catch((e)=>{
            console.log('Existio un error ', e);
        })
    }

    const eliminarContacto = (id)=>{
        db.collection('usuarios').doc(id).delete()
        .then(()=>{
            alert('se elimino el contacto');
        }).catch((e)=>{
            alert('existio un error ', e);
        })
    }

    return (  
        <ContenedorContacto>
            {
                editando ?
                    <form action="" onSubmit={actualizarContacto}>
                        <Input
                            type="text"
                            name="nombre"
                            value={newName}
                            onChange={(e)=>changeNewName(e.target.value)}
                            placeholder="Nombre"
                        />
                        <Input
                            type="email"
                            name="email"
                            value={newMail}
                            onChange={(e)=>changeNewMail(e.target.value)}
                            placeholder="Email"
                        />
                        <Boton type="submit">Actualizar</Boton>
                    </form>
                :
                <>
                    <Nombre>{nombre}</Nombre>
                    <Correo>{correo}</Correo>
                    <Boton onClick={()=> changeEditando(!editando)}>Editar</Boton>
                    <Boton onClick={(e)=> eliminarContacto(id)} >Borrrar</Boton>
                </>
            }
        </ContenedorContacto>
    );
}

const ContenedorContacto = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
`;
 
const Nombre = styled.p`
    font-weight: bold;
`;
 
const Correo = styled.p`
    font-style: italic;
    color: #6B6B6B;
    margin: 5px 0;
`;
 
const Boton = styled.button`
    padding: 5px 20px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    margin: 0px 2px;
    margin-bottom: 10px;
    transition: .3s ease all;
    outline: none;
    background: #C4C4C4;
    color: #fff;
    font-size: 12px;
 
    &:hover {
        background: #3D76E9;
    }
`;
 
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



export default Contacto;