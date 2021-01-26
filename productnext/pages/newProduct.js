import React, { Fragment, useState } from 'react';
import Layout from '../components/layout/Layout';
import useValidate from '../hooks/UseValidation.component';
import validateCreateProduct from '../validations/validateCreateProduct';
import Router from 'next/router';
import firebase from '../firebase';
import {
    Formulario,
    DivForm,
    InputSubmit,
    H1Text,
    ErrorForm,
    TextAreaForm
} from '../components/styleComponent/forms.styles';


const state_inicial ={
    nombre              : "",
    precioArreglo       : "",
    etiquetaArreglo     : "",
    descripcionArreglo  : "",
    descuentoArreglo    : "",
    urlArreglo          : "",
}



const NewProduct = () => {

    // Hook validate create/form
    const { validate,
            error,
            handleSubmit,
            handleChange,
            handleBlur
        } = useValidate(state_inicial, validateCreateProduct, createAccount );

    // destructuring validate
    const { 
        nombreArreglo,
        precioArreglo,
        etiquetaArreglo, 
        descripcionArreglo, 
        descuentoArreglo,
        urlArreglo
    } = validate;
    //View Error
    const [ errorFirebase, setErrorFirebase ] = useState(false);

    //Create Product
    async function createAccount(){
       
       
    }

   

    return ( 
        <Fragment>
            <Layout>
                <Formulario
                    onSubmit={handleSubmit} 
                    noValidate
                >
                    <H1Text>Crear arreglo</H1Text>
                    <fieldset>
                        <legend>
                            Datos generales
                        </legend>
                        <DivForm>
                                <label htmlFor="nombreArreglo">Nombre del arreglo{" "}</label>
                                <input
                                    id              ="nombreArreglo"
                                    type            ="text"
                                    placeholder     ="Ingresa el nombre del arreglo"
                                    name            ="nombreArreglo"
                                    value           ={nombreArreglo}
                                    onChange        ={handleChange}
                                    onBlur          ={handleBlur}
                                    autoComplete    ="off"
                                />
                        </DivForm>
                        { error.nombreArreglo && <ErrorForm>{ error.nombreArreglo } </ErrorForm>}

                        <DivForm>
                                <label htmlFor="nombre">Etiqueta  {" "}</label>
                                <input
                                    id              ="etiquetaArreglo"
                                    type            ="text"
                                    placeholder     ="Ingresa alguna etiqueta al arreglo"
                                    name            ="etiquetaArreglo"
                                    value           ={etiquetaArreglo}
                                    onChange        ={handleChange}
                                    onBlur          ={handleBlur}
                                    autoComplete    ="off"
                                />
                        </DivForm>
                        { error.etiquetaArreglo && <ErrorForm>{ error.etiquetaArreglo } </ErrorForm>}

                        <DivForm>
                                <label htmlFor="nombre">Descripción  {" "}</label>
                                <TextAreaForm
                                    id              ="descripcionArreglo"
                                    placeholder     ="Ingresa la descripción del arreglo"
                                    name            ="descripcionArreglo"
                                    value           ={descripcionArreglo}
                                    onChange        ={handleChange}
                                    onBlur          ={handleBlur}
                                    autoComplete    ="off"
                                />
                        </DivForm>
                        { error.descripcionArreglo && <ErrorForm>{ error.descripcionArreglo } </ErrorForm>}

                        <DivForm>
                                <label htmlFor="nombre">Precio del arreglo {" "}</label>
                                <input
                                    id              ="precioArreglo"
                                    type            ="text"
                                    placeholder     ="Ingresa el costo del arreglo"
                                    name            ="precioArreglo"
                                    value           ={precioArreglo}
                                    onChange        ={handleChange}
                                    onBlur          ={handleBlur}
                                    autoComplete    ="off"
                                />
                        </DivForm>
                        { error.precioArreglo && <ErrorForm>{ error.precioArreglo } </ErrorForm>}
                    </fieldset>
                    <fieldset>
                        <legend>Datos adicionales</legend>
                        <DivForm>
                                <label htmlFor="nombre">Descuento {" "}</label>
                                <input
                                    id              ="descuentoArreglo"
                                    type            ="text"
                                    placeholder     ="Ingresa si tiene algún descuento el arreglo"
                                    name            ="descuentoArreglo"
                                    value           ={descuentoArreglo}
                                    onChange        ={handleChange}
                                    onBlur          ={handleBlur}
                                    autoComplete    ="off"
                                />
                        </DivForm>
                        { error.descuentoArreglo && <ErrorForm>{ error.descuentoArreglo } </ErrorForm>}

                        <DivForm>
                                <label htmlFor="urlArreglo">URL del Arreglo {" "}</label>
                                <input
                                    id              ="urlArreglo"
                                    type            ="url"
                                    name            ="urlArreglo"
                                    placeholder     ="Ingresa la url del arreglo"
                                    value           ={urlArreglo}
                                    onChange        ={handleChange}
                                    onBlur          ={handleBlur}
                                    autoComplete    ="off"
                                />
                        </DivForm>
                        { error.urlArreglo && <ErrorForm>{ error.urlArreglo } </ErrorForm>}

                        <DivForm>
                                <label htmlFor="imagen">Imagen principal {" "}</label>
                                <input
                                    id              ="imagenPrincipal"
                                    type            ="file"
                                    name            ="imagenPrincipal"
                                    onChange        ={handleChange}
                                    onBlur          ={handleBlur}
                                    autoComplete    ="off"
                                />
                        </DivForm>
                        { error.imagenPrincipal && <ErrorForm>{ error.imagenPrincipal } </ErrorForm>}
                    </fieldset>
                    
                    { errorFirebase && <ErrorForm>{ errorFirebase } </ErrorForm>}
                    <InputSubmit 
                        type="submit"
                        value="Crear arreglo"
                    />
                    
               </Formulario>
            </Layout>
        </Fragment>
     );
}
 
export default NewProduct;