import styled from '@emotion/styled';
import React from 'react';

const ContainerStyled = styled.div`
  padding: 20px 20px 0 20px;
`;

type ContainerProps = {
  children: React.ReactNode;
};

const Container = (props: ContainerProps) => (
  <ContainerStyled>{props.children}</ContainerStyled>
);

export default Container;
