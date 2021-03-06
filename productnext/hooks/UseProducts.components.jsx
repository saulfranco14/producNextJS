import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../firebase';

const UseProducts = ( order ) => {

    const [ arreglos, setArreglos ] = useState([]);
    const { firebase }              = useContext(FirebaseContext);

    useEffect(() => {
        const getArreglos = () =>{
            firebase.db.collection('productoArreglo').orderBy(order, 'desc').onSnapshot(getSnapshot)
        }
    getArreglos();

    },[])

    function getSnapshot(snapshot){
        const arreglos = snapshot.docs.map( doc => {
        return{
            id: doc.id,
            ...doc.data()
        }
    })
        setArreglos(arreglos);
    }

    return {
        arreglos
    }
}

export default UseProducts;