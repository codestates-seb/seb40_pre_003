import { useState } from 'react';
import ShareModal from '../ShareModal';
import WriterProfile from '../WriterProfile';
import { Button, Buttons, Container, ModalBackdrop, StopProp } from './style';

function ContentInfo({ time, user }) {
  const [shareOpen, setShareOpen] = useState(false);

  const openModalHandler = () => {
    setShareOpen(!shareOpen);
  };

  return (
    <Container>
      <Buttons>
        <Button onClick={openModalHandler}>Share</Button>
        <Button>Edit</Button>
        <Button>Follow</Button>
        {shareOpen && (
          <ModalBackdrop onClick={openModalHandler}>
            <StopProp onClick={(e) => e.stopPropagation()}>
              <ShareModal openModalHandler={openModalHandler} />
            </StopProp>
          </ModalBackdrop>
        )}
      </Buttons>
      <WriterProfile time={time} user={user} />
    </Container>
  );
}

export default ContentInfo;
