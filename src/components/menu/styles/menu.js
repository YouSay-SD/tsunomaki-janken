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

  ${respondBelow.md`
    padding: 20px;
  `}

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

  a {
    font-size: 3em;
    letter-spacing: 5px;
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
    -webkit-text-stroke: 2px ${ props => props.theme.colors.terciary };

    &:nth-child(odd) {
      color: ${ props => props.theme.colors.primary };
    }

    &:nth-child(even) {
      color: ${ props => props.theme.colors.secondary };
    }
  }
`;