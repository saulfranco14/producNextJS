import React, { Fragment } from 'react';
import {
    Imagen,
    ArregloLI,
    Description,
    Commentary,
    Vote,
    TitleArreglo,
    DescriptionArreglo,
    EtiquetaArreglo,
    ImageDiv,
    DivVote,
    DivPorcent,
    Boton,
    BotonDiv,
    DivNumberVotos
}   from '../styleComponent/detailArreglo.styles';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import Link from 'next/link';

const DetailArreglo = ({ arreglo }) => {

    const { 
            id,
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
                    <Link href="/product/[id]" as={`/product/${id}`}>
                        <ImageDiv>
                            <Imagen src={urlImage} />
                        </ImageDiv>
                    </Link>
                    <DivPorcent>
                        <Link href="/product/[id]" as={`/product/${id}`}>
                            <div>
                                <TitleArreglo>{nombreArreglo}</TitleArreglo>
                            </div>
                        </Link>
                        <EtiquetaArreglo>{etiquetaArreglo}</EtiquetaArreglo>
                        <DescriptionArreglo>{descripcionArreglo}</DescriptionArreglo>
                        <Commentary>
                            <div>
                                <img src="/static/img/comentario.png"/>
                                <p>{comentarios.length} comentarios</p>
                            </div>
                        </Commentary>
                        <p>Publicado hace: { formatDistanceToNow( new Date(created_at), {locale:es} ) }</p>
                    </DivPorcent>
                </Description>
               
                <Vote>
                    <div>${precioArreglo} mxn</div>
                    <DivVote>
                        <div> 👍 </div>
                        <DivNumberVotos>{votos}</DivNumberVotos>
                    </DivVote>
                    <BotonDiv>
                    <Boton>
                        Comprar
                    </Boton>
                    <Boton>
                        Añadir al carrito
                    </Boton>
                </BotonDiv>
                </Vote>
                
            </ArregloLI>
        </Fragment>
     );
}
 
export default DetailArreglo;