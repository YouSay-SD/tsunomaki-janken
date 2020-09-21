import React from 'react';
import styled from 'styled-components';

const PanelStyled = styled.div`
  /* background-color: ${ props => props.theme.colors.rose }; */
  background: linear-gradient(0deg, rgba(${ props => props.theme.colorsRGB.secondary },1) 0%, rgba(${ props => props.theme.colorsRGB.rose },1) 100%);
  height: calc(100% - 800px);
  position: relative;

  &:before {
    content: '';
    background-image: url('./img/elements/frame-cloud-top.png');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100px;
    position: absolute;
    top: -99px;
    left: 0;
  }
`;

export const Panel = () => {
  return (
    <PanelStyled>
      
      <div>

        <Token />

      </div>

    </PanelStyled>
  )
}
