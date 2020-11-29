import React from 'react';
import { Container, Picture, Name, Message, Score } from './styles/card';

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Picture = function CardPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/card/profile.jpg'} />;
}

Card.Name = function CardName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
}

Card.Message = function CardMessage({ children, ...restProps }) {
  return <Message {...restProps}>{children}</Message>;
}

Card.Score = function CardScore({ children, ...restProps }) {
  return <Score {...restProps}>{children}</Score>;
}