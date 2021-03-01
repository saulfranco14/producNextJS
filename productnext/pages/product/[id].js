import React, { Fragment, useEffect, useContext, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Swal                                         from 'sweetalert2';
import { es } from 'date-fns/locale';
import { useRouter } from 'next/router';
import { FirebaseContact, FirebaseContext } from '../../firebase';
import Error404 from '../../components/layout/Error404';
import Layout   from '../../components/layout/Layout';
import {
    TitleProduct,
    ContainerProduct,
    Imagen,
    ImageDiv,
    DescriptionArreglo,
    DivImageDetail
} from '../../components/styleComponent/detailId.syles';
import {
    DivForm,
    InputSubmit
} from '../../components/styleComponent/forms.styles';
import{
    Boton,
    BotonVotar,
    LikeSidebar
} from '../../components/styleComponent/style.styles';
import { route } from 'next/dist/next-server/server/router';


const ProductId = () => {

    const [ product, setProduct ]   = useState({});
    const [ error, setError ]       = useState(false);
    const [ vote, setVote ]         = useState(0);

    const router                = useRouter();
    const { query : { id } }    = router;
    const { user, firebase }          = useContext( FirebaseContext );

    useEffect(() => {
      if (id) {
        
        // GET PRODUCT
        const getProduct = async ( ) =>{
            let producFind = await firebase.db.collection('productoArreglo').doc(id);
            let product = await producFind.get();
            
            
            if( product.exists ) {        
                setProduct( product.data() );
                setVote(product.data().votos);
            } else{
                console.log("Error");
                setError(true);
            }
          
        }

        getProduct();

      }
    }, [id]);

    const {
            comentarios, 
            created_at, 
            descripcionArreglo, 
            descuentoArreglo,
            etiquetaArreglo, 
            nombreArreglo,
            precioArreglo,
            urlArreglo,
            urlImage,
            votos,
            userVotes,
        } = product;

    if( Object.keys(product).length === 0 ) return "cargando...";

    //Create VoteProduct
    const voteProduct = async () => {
        
        let userVote;
        // Si el usuario no eta logeado lo mandamos al login
        if(!user) return router.push('/login');

        await firebase.db.collection("votosArreglo").where("arregloId", "==", id).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                userVote = doc.data().userId.id;
            });
        })
        .catch(function(error) {
            console.log("Error ", error);
        });
        
    
        // New product
        const voteNow = {
            created_at: Date.now(),
            arregloId : id,
            userId :{
                id: user.uid,
                nombreUsuario : user.displayName
            },
        }

        if(!userVote){
            try {
                //Creación de votos de arreglos
                await firebase.db.collection('votosArreglo').add(voteNow);
                Swal.fire({
                    icon: 'success',
                    title: ' Se ha registrado tu voto 🤩 ',
                    showConfirmButton: false,
                    width: '50rem',
                    timerProgressBar: true,
                    timer: 3000
                });

                //Update vote ArregloProduct7
                const newVote = votos +1; 
                await firebase.db.collection('productoArreglo').doc(id).update({ votos : newVote });
                setVote(newVote);
                
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... 🥺',
                    width: '50rem',
                    text: 'Hubo un errror al votar, intente más tarde.'
                })
            }
        }
       
    }
   
    return ( 
        <Fragment>
            <Layout/>
            {
                error ? <Error404/> 
                    :  

                <div className="contenedor">
                    <TitleProduct>
                        {nombreArreglo}
                    </TitleProduct>
                    <ContainerProduct>
                        <div>
                            <p>Publicado hace: { formatDistanceToNow( new Date(created_at), {locale:es} ) }</p>
                            <DivImageDetail>
                                <ImageDiv>
                                    <Imagen src={urlImage} />
                                </ImageDiv>
                                <DescriptionArreglo>{descripcionArreglo}</DescriptionArreglo>
                            </DivImageDetail>
                            {
                                user && (
                                    <Fragment>
                                        <h2> Agrega comentario</h2>
                                        <form>
                                            <DivForm>
                                                <input
                                                    type="text"
                                                    name="message"
                                                />
                                            </DivForm>
                                            <InputSubmit
                                                type="submit" 
                                                value="agregar comentario"
                                            />
                                        </form>

                                        <h2>Comentarios</h2>
                                        {
                                            comentarios.map( comentario => (
                                                <li>
                                                    <p>{comentario.nombre}</p>
                                                    <p>{comentario.userName}</p>
                                                </li>
                                            ))
                                        }
                                    </Fragment>
                                )
                            }
                            
                        </div>

                        <aside>
                            <LikeSidebar>{vote}  👍 </LikeSidebar>
                            {
                                user && (
                                    <Fragment>
                                        <BotonVotar
                                            color   ="false"
                                            onClick ={ voteProduct }
                                        >
                                            votar
                                        </BotonVotar>
                                    </Fragment>
                                )
                            }   
                        </aside>
                    </ContainerProduct>
                </div>
              
            }
           
        </Fragment>
    );
}
 
export default ProductId;