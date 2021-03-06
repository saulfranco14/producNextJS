import React, { Fragment, useState } from 'react';
import {
    InputText,
    InputSubmit,
    FormSearch
}
from '../styleComponent/style.styles';
import Router from 'next/router';

const Search = () => {

    const [ search, setSearch ]  = useState('')

    const searchProduct = ( e ) => {
        e.preventDefault();

        if( search.trim() === '' ) return;

        Router.push({
            pathname : '/buscar',
            query : {
                q : search
            }
        })
    }

    return ( 
        <Fragment>
            <FormSearch
                onSubmit={ searchProduct }
            >
                <InputText 
                    type        ="text" 
                    placeholder ="Buscar ramos o flores" 
                    onChange    ={ e => setSearch(e.target.value) }
                />
                <InputSubmit type="submit">Buscar</InputSubmit>
            </FormSearch>
        </Fragment>
     );
}
 
export default Search;