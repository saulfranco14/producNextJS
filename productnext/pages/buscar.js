import React, { Fragment, useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';
import DetailArreglo from '../components/layout/DetailArreglo'; 
import useProducts from '../hooks/UseProducts.components';

const Buscar = () => {

    // Search 
    const router            = useRouter();
    const { query: { q } }  = router;
    console.log(q);

    const { arreglos } = useProducts('created_at');
    const [ responseSearch, setResponseSearch ] = useState([])

    useEffect(() => {
        if( q ){
            const searchTolower = q.toLowerCase();
            const filter = arreglos.filter( arreglo =>{
                return( 
                    arreglo.nombreArreglo.toLowerCase().includes(searchTolower) ||
                    arreglo.descripcionArreglo.toLowerCase().includes(searchTolower)
                )
            })
            setResponseSearch(filter);
        }
        
    }, [q, arreglos ])

    return ( 
        <Fragment>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {
                responseSearch.map( arreglo => (
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
 
export default Buscar;