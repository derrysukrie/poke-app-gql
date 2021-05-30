import styled from '@emotion/styled';
import React from 'react';

const BadgeStyled = styled.div`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-transform: capitalize;
  border-radius: 5px;
  color: #03ac0e;
  background-color: #e8ffea;
`;

type BadgeProps = {
  children: React.ReactNode;
};

const Badge = (props: BadgeProps) => <BadgeStyled>{props.children}</BadgeStyled>;

export default Badge;
