import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Button = styled.button`
  padding: 8px 20px;
  font-size: 22px;
  border-radius: 14px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  box-shadow: 0px 5px 5px -5px rgba(${props => props.theme.colorsRGB.secondary},.5);
  transition: all .5s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 10px 30px -5px rgba(${props => props.theme.colorsRGB.secondary},.5);
  }

  ${respondBelow.sm`
    font-size: 16px;
  `}
`;