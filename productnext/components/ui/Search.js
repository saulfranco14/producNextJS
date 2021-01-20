import React, { Fragment } from 'react';
import {
    InputText,
    InputSubmit,
    FormSearch
}
from '../styleComponent/style.styles';

const Search = () => {
    return ( 
        <Fragment>
            <FormSearch>
                <InputText type="text" placeholder="Buscar ramos o flores" />
                <InputSubmit type="submit">Buscar</InputSubmit>
            </FormSearch>
        </Fragment>
     );
}
 
export default Search;