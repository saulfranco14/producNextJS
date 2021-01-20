import React, { Fragment }  from 'react';
import Link                 from 'next/link';
import { Navegation }       from '../styleComponent/style.styles';


const Nav = () => {
    return ( 
        <Fragment>
            <Navegation>
                <Link href="/">Inicio</Link>
                <Link href="/populares">Populares</Link>
                <Link href="/newProduct">Nuevo producto</Link>
            </Navegation>
        </Fragment>
     );
}
 
export default Nav ;