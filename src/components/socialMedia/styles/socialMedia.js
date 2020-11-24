import styled from 'styled-components/macro';
import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
  display: grid;
  gap: 10px;
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.white};
  padding: 20px;
  border-radius: 30px 0 0 30px;
  position: fixed;
  bottom: 30px;
  right: 0;

  a {
    max-width: 45px;
    width: 100%;
    transition: transform .3s ease;

    // Mobile
    ${respondBelow.sm`
      max-width: 35px;
    `}

    &:hover {
      transform: scale(1.1);
    }
  }

  img {
    width: 100%;
  }
`;
