import styled from '@emotion/styled';

const ButtonStyled = styled.div<{
  height?: string;
  outline?: boolean;
}>`
  width: 47%;
  height: ${(props) => (props.height ? props.height : '48px')};
  color: ${(props) => (props.outline ? 'rgb(3, 172, 14)' : 'white')};
  padding: 0px 16px;
  font-weight: 800;
  border-radius: 6px;
  font-size: 12px;
  background: ${(props) => (props.outline ? 'white' : 'rgb(3, 172, 14)')};
  cursor: pointer;
  border: 1px solid rgb(3, 172, 14);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

export default ButtonStyled;
