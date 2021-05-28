import React, { ReactNode } from 'react';
import { PaddedStyled } from './padded.styled';

type PaddedProps = {
  children?: ReactNode;
  bottom?: string;
  top?: string;
  left?: string;
  right?: string;
  background?: string;
  shadow?: boolean;
};

const Padded = (props: PaddedProps) => (
  <PaddedStyled
    bottom={props.bottom}
    right={props.right}
    left={props.left}
    top={props.top}
    background={props.background}
    shadow={props.shadow}
  >
    {props.children}
  </PaddedStyled>
);

Padded.defaultProps = {
  children: 'This is chidlren default string',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  background: '#FFF',
  shadow: false,
};

export default Padded;
