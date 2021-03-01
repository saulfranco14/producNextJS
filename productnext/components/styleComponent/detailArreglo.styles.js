import styled from '@emotion/styled';

export const ArregloLI = styled.li`
    padding : 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 10px solid #ea5394;
    /* border-bottom: 10px solid #e83e43; */
`;

export const TitleArreglo = styled.a`
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    cursor: pointer;

`;

export const DescriptionArreglo = styled.p`
    font-size: 1.5rem;
    margin: 0;
    color: #888;
    height: 90px; 
    overflow-y: auto;
`;

export const EtiquetaArreglo = styled.p`
    font-size: 1.5rem;
    color: #888;
`;


export const Description = styled.div`
    /* flex: 0 1 600px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 2rem; */
    grid-template-columns: 1.5fr 3.0fr;
    flex: 0 1 600px;
    flex: auto;
    display: grid;
`

export const DivPorcent = styled.div`
    width : 90%;
    margin-left: 5rem;

`

export const Commentary = styled.div`

    margin-top: 2rem;
    display: flex;
    align-items: center;
    div{
        display: flex;
        align-items: center;
        border: 1px solid #e1e1e1;
        padding: .3rem 1rem;
        margin-right: 2rem;
    }
    img{
        width: 2rem;
        margin-right: 2rem;
    }

    p{
        font-size: 1.6rem;
        margin-right: 1rem;
        font-weight: 700;
        &:last-of-type{
            margin: 0;
        }
    }
`

export const ImageDiv = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 3rem;
    cursor : pointer;
`
export const Imagen = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`

export const DivVote = styled.div`
    flex: auto;
    text-align: right;
    margin-top: 5rem;
     /* flex: 0 0 auto;
    text-align: center;
    border: 1px solid #e1e1e1;
    padding: 1rem 3rem; */

`

export const Vote = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 28rem;
    text-align: right;
    div{
        font-size: 2rem;
        font-weight:bold;
    }
    p{
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
    }
`;

export const DivNumberVotos = styled.div`
    margin-right: 5px;
`

export const BotonDiv = styled.div`
    display: flex;
    align-items: center;
    width: 32rem;
`
export const Boton = styled.a`
    font-weight : 700;
    text-transform : uppercase;
    border: 1px solid #d1d1d1;
    padding : .8rem 2rem;
    margin-right : 1rem;
    cursor:pointer;
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: 'PT Sans',sans-serif;
    background-color: #ea5394;
    color: white;
`