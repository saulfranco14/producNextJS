import React, { Fragment, useContext }  from 'react';
import Link                 from 'next/link';
import { Navegation }       from '../styleComponent/style.styles';
import { FirebaseContext }  from '../../firebase'; 



const Nav = () => {

    const { email } = useContext(FirebaseContext);

    return ( 
        <Fragment>
            <Navegation>
                <Link href="/">Inicio</Link>
                <Link href="/populares">Populares</Link>
                { email === 'saul.franco1420@gmail.com' || email === 'vickyziga@gmail.com' ? 
                     <Link href="/newProduct">Nuevo producto</Link>
                    : null
                }
            </Navegation>
        </Fragment>
     );
}
 
export default Nav ;