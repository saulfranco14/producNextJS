import React, { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import DetailArreglo from '../components/layout/DetailArreglo'; 
import useProducts from '../hooks/UseProducts.components';

export default function Home() {

  const { arreglos } = useProducts('created_at');

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
  )
}
