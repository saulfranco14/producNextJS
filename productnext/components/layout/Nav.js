import React, { Fragment } from 'react';
import Link from 'next/link';


const Nav = () => {
    return ( 
        <Fragment>
            <nav>
                <Link href="/">Inicio</Link>
                <Link href="/">Populares</Link>
                <Link href="/">Nuevo producto</Link>
            </nav>
        </Fragment>
     );
}
 
export default Nav ;