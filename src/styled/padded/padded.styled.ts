import styled from '@emotion/styled';

const PaddedStyled = styled.div<{
  bottom?: string;
  top?: string;
  left?: string;
  right?: string;
  background?: string;
  shadow?: boolean;
}>`
  padding: ${(props) => `${props.top || '0'} ${props.right || '0'} ${
    props.bottom || '0'
  } ${props.left || '0'}`};
  background-color: ${(props) => (props.background ? props.background : null)};
  box-shadow: ${(props) => (props.shadow ? '0 -1px 4px 0 rgba(0, 0, 0, 0.1)' : null)};
`;

export { PaddedStyled };
