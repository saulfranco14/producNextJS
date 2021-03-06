import React, { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import DetailArreglo from '../components/layout/DetailArreglo'; 
import useProducts from '../hooks/UseProducts.components';

const Populares = () => {

    const { arreglos } = useProducts('votos');

    return ( 
        <Fragment>
            <Layout>
                <div className="listado-productos">
                <div className="contenedor">
                    <ul className="bg-white">
                    {
                        arreglos.map( arreglo => (
                        <DetailArreglo
                            key={arreglo.id}
                            arreglo={arreglo}
                        />
                        ))
                    }
                    </ul>
                </div>
                </div>
            </Layout>
    </Fragment>
     );
}
 
export default Populares;