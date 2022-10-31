// import { useState } from 'react';
// import ShareModal from '../ShareModal';
import WriterProfile from '../WriterProfile';
import { Button, Buttons, Container } from './style';

function ContentInfo({ time, user, writerType }) {
  // const [shareOpen, setShareOpen] = useState(false);

  // const openModalHandler = () => {
  //   setShareOpen(!shareOpen);
  // };

  return (
    <Container>
      <Buttons>
        {/* <Button onClick={openModalHandler}>Share</Button> */}
        <Button>Share</Button>
        <Button>Edit</Button>
        {<Button>Delete</Button>}
        <Button>Follow</Button>
        {/* {shareOpen && (
          <ModalBackdrop onClick={openModalHandler}>
            <StopProp onClick={(e) => e.stopPropagation()}>
              <ShareModal openModalHandler={openModalHandler} />
            </StopProp>
          </ModalBackdrop>
        )} */}
      </Buttons>
      <WriterProfile time={time} user={user} writerType={writerType} />
    </Container>
  );
}

export default ContentInfo;
