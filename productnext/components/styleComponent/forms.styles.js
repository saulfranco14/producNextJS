import styled from '@emotion/styled';

export const H1Text = styled.h1`
    text-align: center;
    margin-top: 5rem;

`

export const Formulario = styled.form`
    max-width: 750px;
    width: 95%;
    margin: 3rem auto 5rem auto;
    
    fieldset{
        margin : 2rem 0;
        border: 1px solid #e1e1e1;
        font-size: 2rem;
        padding: 2rem;
    }
`

export const DivForm = styled.div`

    margin-bottom : 2rem;
    display: flex;
    align-items: center;

    label{
        flex : 0 0 150px;
        font-size: 1.8rem;
        margin-right: 0.5rem;
    }

    input {
        flex : 1;
        padding: 1rem;
    }

`;

export const TextAreaForm = styled.textarea`
    flex : 1;
    padding: 1rem;
    width: 100%;
`

export const InputSubmit = styled.input`

    background-color: var(--verde);
    width: 100%;
    padding: 1.5rem;
    text-align : center;
    color: #FFF;
    font-size: 1.8rem;
    text-transform: uppercase;
    border: none;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    cursor: pointer;

`;
export const ErrorForm = styled.p`
    background-color: #d64343;
    padding: 1rem;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    color: #FFF;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;
`;