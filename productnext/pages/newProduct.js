import React, { Fragment, useState, useContext }    from 'react';
import FileUploader                                 from 'react-firebase-file-uploader';
import Layout                                       from '../components/layout/Layout';
import useValidate                                  from '../hooks/UseValidation.component';
import validateCreateProduct                        from '../validations/validateCreateProduct';
import { ProductNew }                               from './product/createProduct';
import Router, { useRouter }                        from 'next/router';
import {FirebaseContext}                            from '../firebase';
import {
    Formulario,
    DivForm,
    InputSubmit,
    H1Text,
    ErrorForm,
    TextAreaForm
}                                                   from '../components/styleComponent/forms.styles';
import { route }                                    from 'next/dist/next-server/server/router';


const state_inicial ={
    nombreArreglo       : "",
    precioArreglo       : "",
    etiquetaArreglo     : "",
    descripcionArreglo  : "",
    descuentoArreglo    : "",
    urlArreglo          : "",
}

const NewProduct = () => {

    //State image 
    const [ image, setImage ]                   = useState('');
    const [ uploadImage, setUploadImage ]       = useState(false);
    const [ progressImage, setProgressImage ]   = useState(0);
    const [ urlImage, setUrlImage ]             = useState('');

    // Hook validate create/form
    const { validate,
            error,
            handleSubmit,
            handleChange,
            handleBlur
        } = useValidate(state_inicial, validateCreateProduct, createProduct );

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

    //useRouter
    const router = useRouter();

    //useContext
    const { user, firebase } = useContext(FirebaseContext);

    //Create Product
    async function createProduct(){
        if(!user) return router.push('/login');
        // product
         // New product
        const ProductNew = {
            created_at: Date.now(),
            nombreArreglo,
            precioArreglo,
            etiquetaArreglo, 
            descripcionArreglo, 
            descuentoArreglo,
            urlArreglo,
            urlImage,
            votos: 0,
            comentarios: []
        }
        await firebase.db.collection('productoArreglo').add(ProductNew);
        Router.push('/');  
    }

    // UploadImage
    const handleUploadStart = () =>{
        setProgressImage(0);
        setUploadImage(true);
    }

    // Progress
    const handleProgress = async ( progress, task ) =>{
        if(progress === 100){
            handleUploadSuccess(task.snapshot.ref.name);
        }
        setProgressImage( { progress } );
    } 

    // Eror ImageUpload
    const handleUploadError = ( error ) => {
        setUploadImage(error);
        console.error(error);
    }

    // Success Image 
    const handleUploadSuccess = async ( nombre ) =>{
        setProgressImage(100);
        setUploadImage(false);
        setImage( nombre )
        await firebase.
        storage
        .ref("productoArreglo")
        .child(nombre)
        .getDownloadURL()
        .then( (urlImage) => { 
            console.log(urlImage); 
            setUrlImage(urlImage) 
        });
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
                            <label htmlFor="imagenPrincipal">Imagen principal {" "}</label>
                            <FileUploader
                                accept          ="image/*"
                                id              ="imagenPrincipal"
                                name            ="imagenPrincipal"
                                autoComplete    ="off"
                                storageRef      ={firebase.storage.ref("productoArreglo")}
                                onUploadStart   ={handleUploadStart}
                                onUploadError   ={handleUploadError}
                                // onUploadSuccess ={handleUploadSuccess}
                                onProgress      ={handleProgress}
                                randomizeFilename

                            />
                        </DivForm>
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