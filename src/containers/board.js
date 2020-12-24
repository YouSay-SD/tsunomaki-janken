import React from 'react';
import Board from '../components/board';
import { CardContainer } from './card';
import Masonry from 'masonry-layout';

window.onload = () => {
  const grid = document.querySelector('.js-masonry-grid');

  new Masonry(grid, {
    itemSelector: '.js-masonry-card',
    columnWidth: '.js-masonry-card',
    horizontalOrder: true,
    isFitWidth: true,
    gutter: 20
  });
}

export function BoardContainer() {

  const texts = [
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      text: 'asdLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting ind'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting ind'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      text: 'asdLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting ind'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting ind'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    
  ]

  return (
    <Board>
      <Board.Content>
        <Board.Grid>
          {
            texts.map(({text, i}) => (
              <CardContainer key={i} text={text} />
            ))
          }
          {/* <CardContainer />
          <CardContainer />
          <CardContainer />
          <CardContainer />
          <CardContainer />
          <CardContainer /> */}
        </Board.Grid>
      </Board.Content>
    </Board> 
  )
}


