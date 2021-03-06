import styled from 'styled-components/macro';
import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  height: 100%;
  position: relative;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: -149px;
    background: linear-gradient(90deg, rgba(${ props => props.theme.colorsRGB.white },1) 50%, rgba(${ props => props.theme.colorsRGB.white },0) 100%);
    width: 150px;
    height: 100%;
    z-index: 1;
  }

  /* Tablet */
  ${respondBelow.md`
    padding: 20px;
  `}

  /* Mobile */
  ${respondBelow.sm`
    background-color: ${props => props.theme.colors.white};
    &:after {
      display: none;
    }
  `}
`;

export const Logo = styled.div`
  max-width: 500px;
  padding: 20px;
  margin-bottom: 50px;
`;

export const Navbar = styled.nav`
  text-align: center;

  &:hover {
    span {
      transform: scale(1.1) !important;
    }
  }

  span {
    display: inline-block;
    font-family: 'Fredoka One', cursive;
    -webkit-text-stroke: 1px ${ props => props.theme.colors.terciary };
    font-size: 3em;
    letter-spacing: 5px;
    display: inline-block;
    color: ${ props => props.theme.colors.primary };
    transition: transform .1s ease;

    /* Tablet */
    ${respondBelow.md`
      font-size: 2em;
    `}

    &:nth-child(odd) {
      color: ${ props => props.theme.colors.primary };
    }

    &:nth-child(even) {
      color: ${ props => props.theme.colors.secondary };
    }
  }
`;