import React, { Fragment } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import Search from '../ui/Search';
import Nav from './Nav';
import { ContenedorHeader }  from '../styleComponent/style.styles';


const Header = () => {
    return ( 
        <Fragment>
            <header
                css={css`
                    border-bottom : 2px solid var(--gris3);
                    padding: 1rem 0;
                `}
            >
                <ContenedorHeader>
                    <div>
                        <p>Flores</p>
                        <Search></Search>

                        <Nav></Nav>
                    </div>
                    <div>
                        <p> Hola: Saúl Franco</p>
                        <button type="button">Cerrar Sesión</button>

                        <Link href="/">Login</Link>
                        <Link href="/">Crear cuenta</Link>
                    </div>
                </ContenedorHeader>
            </header>
        </Fragment>
     );
}
 
export default Header;