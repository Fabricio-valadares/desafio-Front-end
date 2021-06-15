import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 60%;

    button {
        margin: 50px 0 75px 0;
        text-align: center;
    }

    @media (max-width: 600px) {
        max-width: 97%;
    }
`;

export const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    margin: 0 0 40px 0;
    
`;
