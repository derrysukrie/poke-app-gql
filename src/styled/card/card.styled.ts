import styled from '@emotion/styled';

const CardStyled = styled.div<{
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}>`
  border-radius: 10px;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%);
  width: auto;
  padding: 10px;
  background-color: #fff;
  cursor: pointer;
`;

export default CardStyled;
