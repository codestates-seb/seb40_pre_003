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
      <ModalContentWrapper open={isOpen}>
        {isOpen ? (
          <ModalContent>
            <HeaderModal />
          </ModalContent>
        ) : null}
      </ModalContentWrapper>
    </Container>
  );
};

export default HeaderModalButton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ModalButton = styled.button`
  > img {
    width: 20px;
  }
  border: 0;
  background-color: rgb(247, 247, 247);
`;

const ModalContentWrapper = styled.div``;

const ModalContent = styled.div`
  background-color: white;
  color: white;
  width: 400px;
  height: 500px;
`;
