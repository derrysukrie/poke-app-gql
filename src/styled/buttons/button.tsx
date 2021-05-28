import React from 'react';
import ButtonStyled from './button.styled';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  height?: string;
  outline?: boolean;
};

function Button(props: ButtonProps) {
  return (
    <ButtonStyled
      outline={props.outline}
      height={props.height}
      onClick={props.onClick}
    >
      {props.children}
    </ButtonStyled>
  );
}

Button.defaultProps = {
  height: '48px',
  outline: false,
};

export default Button;
