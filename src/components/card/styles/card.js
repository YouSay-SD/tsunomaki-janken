import styled from 'styled-components/macro';
import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  /* Mobile */
  ${respondBelow.sm`
  `}
`;

export const Picture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

export const Name = styled.span``;

export const Message = styled.p``;

export const Score = styled.div``;
//     background-color: ${props => props.theme.colors.white};
