import React from 'react';
import Card from '../components/card';

export function CardContainer({text}) {

  return (
    <Card>
      <Card.Picture src='' />
      <Card.Name>YouSay</Card.Name>
      <Card.Message>{text}</Card.Message>
      <Card.Score>
        <div>
          <span>WIN</span>
          <p>3</p>
        </div>
        <div>
          <span>LOSE</span>
          <p>4</p>
        </div>
        <div>
          <span>DRAW</span>
          <p>1</p>
        </div>
      </Card.Score>
    </Card> 
  )
}


