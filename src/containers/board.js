import React, { useEffect } from 'react';
import Board from '../components/board';
import { CardContainer } from './card';
import Masonry from 'masonry-layout';
import { NavLink } from 'react-router-dom';
import { getScores } from '../helpers/get-scores';
import { startGetScores } from '../actions/game';

export function BoardContainer() {
  
  useEffect(() => {
    const grid = document.querySelector('.js-masonry-grid');
    
    new Masonry(grid, {
      itemSelector: '.js-masonry-card',
      columnWidth: '.js-masonry-card',
      horizontalOrder: true,
      isFitWidth: true,
      gutter: 20
    });
  }, [])

   
  useEffect(() => {

    handleGetScores();
  }, [])


  const handleGetScores = async () => {
    const scores = getScores();
  }


  // const scores = getScores();

  const texts = [
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      id: 1
    },
    {
      text: 'asdLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      id: 2
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting ind',
      id: 3
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      id: 4,
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting ind',
      id: 5
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      id: 6
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      id: 7
    },
    {
      text: 'asdLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      id: 8
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting ind',
      id: 9
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      id: 10
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting ind',
      id: 11
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      id: 12
    },
    
  ]

  return (
    <Board>
      <Board.Content>
        <Board.Grid>
        <NavLink
          activeClassName="active"
          exact
          to="/janken"
        >
          janken
        </NavLink>
          {
            texts.map(({text, id}) => (
              <CardContainer key={id} text={text} />
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


