import React, { useEffect, useState, useContext } from 'react';
import Layout from '../components/layout/Layout';
import { FirebaseContext } from '../firebase';
import DetailArreglo from '../components/layout/DetailArreglo'; 



export default function Home() {

  const [ arreglos, setArreglos ] = useState([]);
  const { firebase }              = useContext(FirebaseContext);

  useEffect(() => {
    const getArreglos = () =>{
      firebase.db.collection('productoArreglo').orderBy('created_at', 'desc').onSnapshot(getSnapshot)
    }
    getArreglos();
  }, [])

  function getSnapshot(snapshot){
    const arreglos = snapshot.docs.map( doc => {
      return{
        id: doc.id,
        ...doc.data()
      }
    })
    setArreglos(arreglos);
  }

  return (
    <div>
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
    </div>
  )
}
