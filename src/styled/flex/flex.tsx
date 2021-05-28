import { ReactNode } from 'react';
import styled from '@emotion/styled';

const FlexStyled = styled.div<{
  justify?: string;
  align?: string;
  direction?: string;
  flex?: string;
  flexWrap?: string;
  block?: boolean;
}>`
  display: flex;
  justify-content: ${(props) => (props.justify ? `${props.justify}` : null)};
  align-items: ${(props) => (props.align ? `${props.align}` : null)};
  flex-direction: ${(props) => (props.direction ? `${props.direction}` : null)};
  flex: ${(props) => (props.flex ? `${props.flex}` : null)};
  flex-wrap: ${(props) => (props.flexWrap ? `${props.flexWrap}` : null)};
  width: ${(props) => (props.block ? '100%' : null)};
`;

export type FlexProps = {
  children?: ReactNode;
  justify?: 'space-between' | 'space-around' | 'center' | 'start';
  align?: 'center' | 'stretch' | 'start';
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  flex?: string;
  block?: boolean;
  onClick?: () => void;
};

const Flex = (props: FlexProps) => (
  <FlexStyled
    onClick={props.onClick}
    justify={props.justify}
    align={props.align}
    direction={props.direction}
    flex={props.flex}
    flexWrap={props.flexWrap}
    block={props.block}
  >
    {props.children}
  </FlexStyled>
);

export default Flex;
