import React from 'react';
import { InputSearchGroup, InputSearchControl } from './input-search.styled';

type InputSearchProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  nickname: string;
};

const InputSearch = (props: InputSearchProps) => (
  <InputSearchGroup>
    <InputSearchControl
      name="q"
      placeholder="Cari barang disini"
      onChange={props.onChange}
      value={props.nickname}
    />
  </InputSearchGroup>
);

export default InputSearch;
