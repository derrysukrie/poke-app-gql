import React from 'react';
import Modal from 'react-modal';

import Flex from 'styled/flex';
import Text from 'styled/typhography/text';
import Padded from 'styled/padded/padded';
import InputSearch from 'styled/input-search';
import Button from 'styled/buttons';

type ModalProps = {
  isOpen: boolean;
  nickname: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setShowModal: () => void;
  savePokemon: () => void;
};

function ModalPopUp(props: ModalProps) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal
      style={customStyles}
      isOpen={props.isOpen}
      contentLabel="You got the Pokemon!!!"
    >
      <Text block align="center">
        You got the Pokemon!!!
      </Text>
      <Padded top="20px">
        <Text align="center" block>
          Enter your pokemon nickname
        </Text>
        <InputSearch onChange={props.onChange} nickname={props.nickname} />
        <Padded top="20px">
          <Flex>
            <Button outline height="32px" onClick={props.setShowModal}>
              Cancel
            </Button>
            <Padded right="6px" left="6px" />
            <Button height="32px" onClick={props.savePokemon}>
              Submit
            </Button>
          </Flex>
        </Padded>
      </Padded>
    </Modal>
  );
}

export default ModalPopUp;
