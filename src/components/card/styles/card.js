import styled from 'styled-components/macro';
import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
  /* border: 3px solid ${props => props.theme.colors.secondary}; */
  background-color: rgba(${props => props.theme.colorsRGB.white}, .6);
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 65px 35px 35px;
  margin-top: 70px;
  border-radius: 20px;

  /* Mobile */
  ${respondBelow.sm`
    width: 360px;
  `}

  ${respondBelow.xs`
    width: 100%;
  `}
`;

export const Picture = styled.img`
  border: 3px solid ${props => props.theme.colors.secondary};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: -57px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Name = styled.span`
  font-size: 20px;
  margin-bottom: 15px;
`;

export const Message = styled.p`
  font-size: 15px;
  line-height: 23px;
  margin-bottom: 25px;
`;

export const Score = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  span {
    display: block;
    margin-bottom: 10px;
    /* color: ${props => props.theme.colors.secondary}; */
  }

`;
//     background-color: ${props => props.theme.colors.white};
