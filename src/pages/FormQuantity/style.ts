import styled from "styled-components";
import { Button } from "@material-ui/core"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const DivTitle = styled.div`
    width: 60%;

    @media(max-width: 600px) {
        width: 95%;
    }
`;

export const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    margin: 30px 0 40px 0;
    
`;

export const Form = styled.form`
    display: flex;
   
`;

export const ButtonSend = styled(Button)`
    color: #fff;
    outline: none;
    border: none;
    border-radius: 4px;
    margin-left: 20px;
    padding: 0 10px;
    cursor: pointer;
`;
