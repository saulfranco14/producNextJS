export default function validateCreateProduct( valores ) {
    let errores = {};

    if(!valores.nombreArreglo) errores.nombreArreglo            ="El nombre del arreglo es obligatorio";
    if(!valores.precioArreglo) errores.precioArreglo            ="El precio del arreglo es obligatorio";
    if(!valores.etiquetaArreglo) errores.etiquetaArreglo        ="La etiqueta del arreglo es obligatorio";
    if(!valores.descripcionArreglo) errores.descripcionArreglo  ="La descripcion del arreglo es obligatorio";
    
    if(!valores.urlArreglo){
        errores.urlArreglo                  ="La url del arreglo es obligatorio";
    }else if( !/^(ftp|http|https):\/\/[^ "]+$/.test(valores.urlArreglo) ) {
        errores.urlArreglo = "URL mal formateada o no válida"
    }
    
    

    return errores;

}