import React from 'react';
import Board from '../components/board';
import { CardContainer } from './card';

export function BoardContainer() {

  return (
    <Board>
      <Board.Content>
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
      </Board.Content>
    </Board> 
  )
}


