import React, { Fragment, useState } from 'react';
import Layout from '../components/layout/Layout';
import useValidate from '../hooks/UseValidation.component';
import validateCreateAccount from '../validations/validateCreateAccount';
import Router from 'next/router';
import firebase from '../firebase';
import {
    Formulario,
    DivForm,
    InputSubmit,
    H1Text,
    ErrorForm
} from '../components/styleComponent/forms.styles';


const state_inicial ={
    nombre      : "",
    email       : "",
    password    : "",
}

const CreateAccount = () => {

    // Hook validate create/form
    const { validate,
            error,
            handleSubmit,
            handleChange,
            handleBlur
        } = useValidate(state_inicial, validateCreateAccount, createAccount );

    // destructuring validate
    const { nombre,email,password } = validate;

    //View Error
    const [ errorFirebase, setErrorFirebase ] = useState(false);

    // create User
    async function createAccount(){
        try {
            await firebase.register(nombre, email, password);  
            Router.push('/');  
        } catch (error) {
            setErrorFirebase("Usuario o contraseña incorrecto");
        }
       
    }

   

    return ( 
        <Fragment>
            <Layout>
                <Formulario
                    onSubmit={handleSubmit} 
                    noValidate
                >
                   <H1Text>Crear cuenta</H1Text>
                    <DivForm>
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                id              ="nombre"
                                type            ="text"
                                placeholder     ="Ingresa tu nombre"
                                name            ="nombre"
                                value           ={nombre}
                                onChange        ={handleChange}
                                onBlur          ={handleBlur}
                                autoComplete    ="off"
                            />
                    </DivForm>
                    { error.nombre && <ErrorForm>{ error.nombre } </ErrorForm>}
                    <DivForm>
                            <label htmlFor="email">Email</label>
                            <input
                                id              ="email"
                                type            ="text"
                                placeholder     ="Ingresa tu email"
                                name            ="email"
                                value           ={email}
                                onChange        ={handleChange}
                                onBlur          ={handleBlur}
                                autoComplete    ="off"
                            />
                    </DivForm>
                    { error.email && <ErrorForm>{ error.email } </ErrorForm>}
                    <DivForm>
                            <label htmlFor="password">Password</label>
                            <input
                                id                  ="password"
                                type                ="password"
                                placeholder         ="Ingresa tu paswword"
                                name                ="password"
                                value               ={password}
                                onChange            ={handleChange}
                                onBlur              ={handleBlur}
                                autoComplete        ="off"
                            />
                    </DivForm>
                    { error.password && <ErrorForm>{ error.password } </ErrorForm>}
                    { errorFirebase && <ErrorForm>{ errorFirebase } </ErrorForm>}
                    <InputSubmit 
                        type="submit"
                        value="Crear cuenta"
                    />
                    
               </Formulario>
            </Layout>
        </Fragment>
     );
}
 
export default CreateAccount;