import React, { Fragment }  from 'react';
import Link                 from 'next/link';
import { Navegation }       from '../styleComponent/style.styles';


const Nav = () => {
    return ( 
        <Fragment>
            <Navegation>
                <Link href="/">Inicio</Link>
                <Link href="/">Populares</Link>
                <Link href="/">Nuevo producto</Link>
            </Navegation>
        </Fragment>
     );
}
 
export default Nav ;