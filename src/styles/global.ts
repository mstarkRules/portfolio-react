import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --background-dark: rgb(21, 32, 43);
        --title-dark: #fff;
        --text-dark: #fff;
;        
    }
    *{
        margin: 0;
        padding: 0;
        
        box-sizing: border-box;

    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, strong{
        font-weight: 600;
    }
    a{
       font-family: 'Poppins', sans-serif;
       text-decoration: none;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }

        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }
    html { scroll-behavior: smooth; }
`;
