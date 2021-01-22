import styled from '@emotion/styled';

export const H1Text = styled.h1`
    text-align: center;
    margin-top: 5rem;

`

export const Formulario = styled.form`
    max-width: 600px;
    width: 95%;
    margin: 5rem auto 0 auto;
`

export const DivForm = styled.div`

    margin-bottom : 2rem;
    display: flex;
    align-items: center;

    label{
        flex : 0 0 150px;
        font-size: 1.8rem;
    }

    input {
        flex : 1;
        padding: 1rem;
    }

`;

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