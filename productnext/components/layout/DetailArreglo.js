import React, { Fragment } from 'react';
import {
    Imagen,
    ArregloLI,
    Description,
    Commentary,
    Vote,
    TitleArreglo,
    DescriptionArreglo,
    EtiquetaArreglo
}   from '../styleComponent/detailArreglo.styles';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';

const DetailArreglo = ({ arreglo }) => {

    const { 
            created_at,
            descripcionArreglo,
            descuentoArreglo, 
            etiquetaArreglo, 
            nombreArreglo, 
            precioArreglo, 
            urlArreglo, 
            urlImage,
            votos,
            comentarios
    } = arreglo;

    return ( 
        <Fragment>
            <ArregloLI>
                <Description>
                    <div>
                        <Imagen src={urlImage} />
                    </div>
                    <div>
                        <TitleArreglo>{nombreArreglo}</TitleArreglo>
                        <EtiquetaArreglo>{etiquetaArreglo}</EtiquetaArreglo>
                        <DescriptionArreglo>{descripcionArreglo}</DescriptionArreglo>
                        <Commentary>
                            <div>
                                <img src="/static/img/comentario.png"/>
                                <p>{comentarios.length} comentarios</p>
                            </div>
                        </Commentary>
                        <p>Publicado hace: { formatDistanceToNow( new Date(created_at), {locale:es} ) }</p>
                    </div>
                </Description>
                <Vote>
                    <div> &#9650;</div>
                    <p>{votos}</p>
                </Vote>
            </ArregloLI>
        </Fragment>
     );
}
 
export default DetailArreglo;