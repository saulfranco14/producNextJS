import styled from '@emotion/styled';

export const ArregloLI = styled.li`
    padding : 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e1e1e1;
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
`;

export const EtiquetaArreglo = styled.p`
    font-size: 1.5rem;
    color: #888;
`;


export const Description = styled.div`
    flex: 0 1 600px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 2rem;
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
export const Imagen = styled.img`
    width: 200px;
`

export const Vote = styled.div`
    flex: 0 0 auto;
    text-align: center;
    /* border: 1px solid #e1e1e1; */
    padding: 1rem 3rem;
    
    div{
        font-size: 2rem
    }
    p{
        margin: 0;
        font-size: 2rem;
        font-weight: 700;
    }
`;