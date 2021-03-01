export default function validateCreateProduct( valores ) {
    let errores = {};

    if(!valores.nombreArreglo) errores.nombreArreglo            ="El nombre del arreglo es obligatorio";
    
    if(!valores.etiquetaArreglo) errores.etiquetaArreglo        ="La etiqueta del arreglo es obligatorio";
    if(!valores.descripcionArreglo) errores.descripcionArreglo  ="La descripcion del arreglo es obligatorio";

    // validate precioArreglo
    if(!valores.precioArreglo) {
        errores.precioArreglo  ="El precio del arreglo es obligatorio";
    }else if (!/^[0-9]+([.])?([0-9]+)?$/.test(valores.precioArreglo) ){
        errores.precioArreglo            ="Solo se permiten números o tu precio esta mal escrito";
    }
    
    return errores;

}