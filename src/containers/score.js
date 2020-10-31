import React from 'react';
import { useSelector } from 'react-redux';
import Score from '../components/score';

export function ScoreContainer() {

  const { score } = useSelector(state => state.game);

  return (
    <Score>
      <Score.Box>
        <h2>Win</h2>
        <p>{score.win}</p>
      </Score.Box>
      <Score.Box>
        <h2>Lose</h2>
        <p>{score.lose}</p>
      </Score.Box>
      <Score.Box>
        <h2>Draw</h2>
        <p>{score.draw}</p>
      </Score.Box>
    </Score>
  )
}
