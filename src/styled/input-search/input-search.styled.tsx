import styled from '@emotion/styled';

export const InputSearchGroup = styled.div`
  background: #ffffff;
  border: 1px solid #d6d3d3;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  padding: 4px 7px;
  align-items: center;
  width: 100%;
  display: flex;
  box-sizing: border-box;
`;

export const InputSearchControl = styled.input`
  border: none;
  outline: none;
  font-size: 12px;
  flex-grow: 1;
`;

export const ClearInputControl = styled.button`
  border: none;
  background: #c1c1c1;
  color: white;
  border-radius: 100px;
  width: 16px;
  height: 16px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;
