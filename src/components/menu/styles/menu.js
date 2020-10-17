import styled from 'styled-components/macro';
import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
  background: linear-gradient(90deg, rgba(${ props => props.theme.colorsRGB.white },1) 88%, rgba(${ props => props.theme.colorsRGB.white },0) 100%);
  max-width: 45%;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 50px 70px 50px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${respondBelow.md`
    max-width: 55%;
    padding: 20px 40px 20px 20px;
  `}

  ${respondBelow.sm`
    max-width: initial;
    padding: 20px;
    background-color: ${props => props.theme.colors.white};
  `}
`;

export const Logo = styled.div`
  max-width: 500px;
  padding: 20px;
  margin-bottom: 50px;
`;

export const Navbar = styled.nav`
  text-align: center;

  a {
    font-size: 3em;
    display: inline-block;
    color: ${ props => props.theme.colors.primary };
    transition: transform .5s ease;

    &:hover {
      transform: scale(1.2);
    }

    ${respondBelow.md`
      font-size: 2em;
    `}
  }

  span {
    display: inline-block;
  }
`;