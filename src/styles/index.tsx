import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`

    html {
        background-color: #fafafa ;
        color: #23222F;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;

        ::-webkit-scrollbar-track {
            background-color: #303140;
        }

        ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 10px;
         }
    }

    .MuiCard-root {
        margin: 10px 15px;
        padding: 20px;
    }

    .MuiButton-root {
        color: #fff;
    }
`;