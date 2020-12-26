import styled from 'styled-components/macro';
import { animated } from 'react-spring';
// import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
  /* position: relative;
  overflow: hidden; */
`;

export const Form = styled(animated.form)`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.terciary};
  border-radius: 25px;
  padding: 30px;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 2;
  max-width: 550px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Background = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(${props => props.theme.colorsRGB.terciary}, .7);
`;

export const Title = styled.h3`
  margin-bottom: 25px;
`;

export const Message = styled.textarea`
  font-size: 20px;
  color: ${props => props.theme.colors.terciary};
  max-width: 100%;
  min-width: 100%;
  min-height: 250px;
  max-height: 500px;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 25px;

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.secondary};
  }

  &::placeholder {
    color: ${props => props.theme.colors.terciary};
    opacity: .5;
  }
`;