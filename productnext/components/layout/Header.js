import React, { Fragment } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import Search from '../ui/Search';
import Nav from './Nav';
import { 
    ContenedorHeader,
    Logo,
    Boton,
    DivCenter,
    NameP
 }  
from '../styleComponent/style.styles';


const Header = () => {


    const user = false;

    return ( 
        <Fragment>
            <header
                css={css`
                    border-bottom : 2px solid var(--gris3);
                `}
            >
                <ContenedorHeader>
                    <DivCenter>
                        <Link href="/">
                            <Logo>
                                <img width="110" height="130" src="../static/img/logo-2.jpg"/>
                            </Logo>
                        </Link>
                        <Search></Search>

                        <Nav></Nav>
                    </DivCenter>
                    <DivCenter>
                       {
                           user ? (
                                <Fragment>
                                    <NameP> Hola: Saúl Franco</NameP>
                                    <Boton
                                        bgColor={true}
                                    >
                                        Cerrar Sesión
                                    </Boton>
                                </Fragment>
                           ):(
                                <Fragment>
                                    <Link href="/login">
                                        <Boton
                                            bgColor={true}
                                        >
                                            Login
                                        </Boton>
                                    </Link>
                                    <Link href="/createAccount">
                                        <Boton>
                                            Crear cuenta
                                        </Boton>
                                    </Link>
                                </Fragment>
                           )
                       }
                    </DivCenter>
                </ContenedorHeader>
            </header>
        </Fragment>
     );
}
 
export default Header;