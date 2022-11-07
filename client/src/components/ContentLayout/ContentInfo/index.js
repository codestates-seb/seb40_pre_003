import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import WriterProfile from '../WriterProfile';
import { Button, Buttons, Container, EditLink } from './style';
const URL = process.env.REACT_APP_API_URL;

function ContentInfo({ time, user, writerType, questionId, answerId }) {
  const navigate = useNavigate();
  console.log(questionId, answerId);

  // Delete 누르면 axios로 delete 요청. answerId가 있으면 답변 삭제, 없으면 질문 삭제
  const handleDelete = () => {
    if (window.confirm('Delete this page?')) {
      let uri, to;
      if (answerId) {
        uri = `${URL}/api/questions/${questionId}/answers/${answerId}`;
        to = `/questions/${questionId}`;
      } else {
        uri = `${URL}/api/questions/${questionId}`;
        to = `/`;
      }
      axios
        .delete(uri, {
          headers: {
            Authorization: localStorage.getItem('accesstoken'),
          },
        })
        .then((res) => {
          console.log(res);
          navigate(to);
          location.reload();
        })
        .catch((error) => console.log(error));
      navigate(to);
    }
  };

  // displayName 비교해서 본인 글인지 확인
  const isMyPost = () => {
    if (localStorage.getItem('displayname') === user.displayName) {
      return true;
    } else return false;
  };

  return (
    <Container>
      <Buttons>
        <Button>Share</Button>
        {isMyPost() && (
          <Button>
            <EditLink
              to={`/questions/edit/${questionId}${
                answerId ? '/' + answerId : ''
              }`}
            >
              Edit
            </EditLink>
          </Button>
        )}
        {isMyPost() && <Button onClick={handleDelete}>Delete</Button>}
        <Button>Follow</Button>
      </Buttons>
      <WriterProfile time={time} user={user} writerType={writerType} />
    </Container>
  );
}

export default ContentInfo;
