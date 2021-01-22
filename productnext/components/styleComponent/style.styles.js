import styled from '@emotion/styled';


export const ContenedorHeader = styled.div`
    max-width: 1200px;
    width : 95%;
    margin: 0 auto;
    @media (min-width: 798px){
        display: flex;
        justify-content: space-between;
    }
`;

export const Logo = styled.p`
    color : var(--logo);
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
    margin-top: 0rem;
    cursor: pointer;
`

export const DivCenter = styled.div`
    display: flex;
    align-items: center;
`

export const NameP = styled.p`
    margin-right: 2rem;
`

export const FormSearch = styled.form`
    position: relative;
`

export const InputText = styled.input`
    border : 1px solid var(--gris3);
    padding: 1rem;
    min-width: 300px;
`

export const InputSubmit = styled.button`
    height: 3rem;
    width: 3rem;
    display: block;
    background-size : 4rem;
    background-image: url('/static/img/buscar.png');
    background-repeat: no-repeat;
    right: 1rem;
    top: 1px;
    background-color: white;
    border: none;
    cursor: pointer;
    position: absolute;
    text-indent : -99999px;
`;

export const Navegation = styled.nav`
    padding-left : 2rem;

    a{
        font-size: 1.8rem;
        margin-left : 2rem;
        color : var(--gris2);
        font-family: 'PT Sans', sans-serif;

        &:last-of-type{
            margin-right: 0;
        }
    }
`

export const Boton = styled.a`
    font-weight : 700;
    text-transform : uppercase;
    border: 1px solid #d1d1d1;
    padding : .8rem 2rem;
    margin-right : 1rem;
    cursor:pointer;

    background-color: ${ props => props.bgColor ? '#29bf89' : 'white' };
    color           : ${ props => props.bgColor ? 'white'   : '#000'};

    &:last-of-type{
        margin-right:0;
    }
`