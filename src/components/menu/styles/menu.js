import styled from 'styled-components/macro';
import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
  background-color: ${ props => props.theme.colors.white };
  max-width: 700px;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.div`
  max-width: 500px;
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

    /* Mobile */
    ${respondBelow.sm`
      font-size: 25px;
    `}
  }

  span {
    display: inline-block;
  }
`;