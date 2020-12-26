import { createGlobalStyle } from 'styled-components';
import { respondBelow } from '../helpers/breakPoints';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        &::selection {
            background: #F7C878;
            color: white;
        }
    }

    img {
        width: 100%;
    }

    textarea,
    a,
    p,
    span,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Nunito Sans', cursive, Arial, sans-serif;
        font-weight: 600;
    }

    a {
        text-decoration: none;
    }

    button, input[type="submit"] {
        padding: 10px 20px;
        font-size: 22px;
        border-radius: 14px;
        cursor: pointer;
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.white};
        box-shadow: 0px 5px 5px -5px rgba(${props => props.theme.colorsRGB.secondary},.5);
        transition: all .5s ease;
        border: none;
        outline: none;

        &:hover {
            transform: scale(1.1);
            box-shadow: 0px 10px 30px -5px rgba(${props => props.theme.colorsRGB.secondary},.5);
        }

        ${respondBelow.sm`
            font-size: 16px;
        `}
    }
`;

export default GlobalStyle;
