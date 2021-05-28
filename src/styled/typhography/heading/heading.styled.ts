import styled from '@emotion/styled';

const StyledHeading = styled.div<{
  color?: string;
  customColor?: string;
  size?: number;
  underline?: boolean;
  weight?: string;
  block?: boolean;
  align?: string;
  marginBottom?: string;
  marginTop?: string;
}>`
  font-size: ${(props) => (props.size ? `${props.size}px` : '14px')};
  font-weight: ${(props) => (props.weight ? props.weight : '')};
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  text-decoration: ${(props) => (props.underline ? 'underline' : '')};
  font-family: 'Montserrat', sans-serif;
  text-align: ${(props) => (props.align ? props.align : null)};
  margin-top: ${(props) => props.marginTop && props.marginTop};
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};
`;

export { StyledHeading };
