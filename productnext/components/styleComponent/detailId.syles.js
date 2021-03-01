import styled from '@emotion/styled';


export const TitleProduct = styled.h1`
    text-align : center;

`

export const ContainerProduct = styled.div`
    @media ( min-width: 768px ){
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`;

export const ImageDiv = styled.div`
    width: 60%;
    height: 30%;
    margin-right: 3rem;
    cursor : pointer;
`;

export const Imagen = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const DivImageDetail = styled.div`
    display: flex;

`

export const DescriptionArreglo = styled.p`
    width: 100%;
    padding: 5px;

`