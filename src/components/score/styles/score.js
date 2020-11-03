import styled from 'styled-components/macro';
import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  position: absolute;
  top: -150px;
  background-color: rgba(${props => props.theme.colorsRGB.white}, .5);
  padding: 200px 150px 50px;
  border-radius: 0 0 50% 50%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 30px;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.primary};
    border-bottom: 3px solid ${props => props.theme.colors.primary};

    ${respondBelow.sm`
      font-size: 22px;
    `}
  }

  p {
    font-size: 40px;
    color: ${props => props.theme.colors.secondary};
    font-weight: 600;

    ${respondBelow.sm`
      font-size: 25px;
    `}
  }
`;