import styled from '@emotion/styled';

const StyledText = styled.div<{
  customColor?: string;
  size?: number;
  decoration?: string;
  weight?: string;
  block?: boolean;
  align?: string;
  marginBottom?: string;
  marginTop?: string;
  marginLeft?: string;
  cursor?: string;
  fontStyle? :string;
}>`
  color: ${(props) => (props.customColor ? props.customColor : '#000')};
  font-size: ${(props) => (props.size ? `${props.size}px` : '12px')};
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  text-decoration: ${(props) => (props.decoration ? props.decoration : null)};
  text-align: ${(props) => (props.align ? props.align : null)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : null)};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : null)};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 'unset;')};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : null)};
  cursor: ${(props) => (props.cursor && props.cursor)};
  text-transform: capitalize;
`;

export { StyledText };
