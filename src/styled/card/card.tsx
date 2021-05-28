import React from 'react';
import CardStyled from './card.styled';

type CardProps = {
  children: React.ReactNode;
};

function Card(props: CardProps) {
  return <CardStyled>{props.children}</CardStyled>;
}
