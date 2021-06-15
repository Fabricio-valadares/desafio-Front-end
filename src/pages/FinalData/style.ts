import styled from "styled-components";
import { Card } from "@material-ui/core";

export const CardStyled = styled(Card)`
    
`;

export const ContainerCard = styled.div`
    width: 65%;

    @media(max-width: 600px) {
        width: 95%;
    }
`;


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
    margin: 20px 0 30px 0;
    
`;