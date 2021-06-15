import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    margin: 20px 0 20px 0;
    
`;

export const DivContainer = styled.div`
    width: 45%;

    @media(max-width: 600px) {
        width: 95%;
    }
`;
export const ContainerCard = styled.div`
    width: 65%;
    height: 90%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fafafa;

    @media(max-width: 600px) {
        width: 95%;
    }
`;