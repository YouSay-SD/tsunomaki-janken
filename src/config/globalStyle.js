import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    img {
        width: 100%;
    }

    a,
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Fredoka One', cursive;
        font-weight: 300;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
