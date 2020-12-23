import styled from 'styled-components/macro';
import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
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
  width: 150px;
  height: 150px;
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
  z-index: 1;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  padding: 7px 22px;
  border-radius: 30px;
`;

export const Message = styled.p`
  font-size: 15px;
  line-height: 23px;
  padding-bottom: 15px;
  color: ${props => props.theme.colors.terciary};
`;

export const Score = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 15px;
  border-top: 1px solid ${props => props.theme.colors.terciary};

  span {
    display: block;
    margin-bottom: 13px;
    font-weight: 700;
    background-color: ${props => props.theme.colors.secondary};
    padding: 5px 8px;
    color: ${props => props.theme.colors.white};
  }

  p {
    font-size: 20px;
    color: ${props => props.theme.colors.terciary};
  }

  div {
    &:first-child {
      span {
        border-radius: 8px 0 0 8px;
      }
    }

    &:last-child {
      span {
        border-radius: 0 8px 8px 0;
      }
    }
  }
`;
