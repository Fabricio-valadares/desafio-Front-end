import { Button } from "@material-ui/core"
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 200px;
`;

export const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    margin: 30px 0 40px 0;
    
`;

export const ButtonSend = styled(Button)`
    // background: #5EC48D;
    // color: #fff;
    // outline: none;
    // border: none;
    // border-radius: 4px;
    // margin-left: 20px;
    // padding: 0 10px;
    // cursor: pointer;
`;