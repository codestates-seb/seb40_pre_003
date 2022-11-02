import { useState } from 'react';
import styled from 'styled-components';
import message from '../../../src/assets/images/message_icon.png';
import HeaderModal from '../HeaderModal';

const HeaderModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <ModalButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <img src={message} alt="img" />
      </ModalButton>

      {isOpen ? (
        <ModalContent open={isOpen}>
          <HeaderModal setIsOpen={setIsOpen} />
        </ModalContent>
      ) : null}
    </Container>
  );
};

export default HeaderModalButton;

const Container = styled.div``;

const ModalButton = styled.button`
  > img {
    width: 20px;
    height: 18px;
    margin: 0px 5px;
  }
  border: 0;
  background-color: rgb(247, 247, 247);
  position: fixed;
  z-index: 1;
  :hover {
    background-color: var(--black-075);
  }
`;

const ModalContent = styled.div`
  width: 400px;
  border-radius: 15px;
  background-color: #fff;
  position: absolute; //포지션 잡느라 죽는줄..ㅠㅠ
  top: 224px;
  right: -200px;
  transform: translate(-50%, -50%);
`;
