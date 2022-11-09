import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import WriterProfile from '../WriterProfile';
import { Button, Buttons, Container, EditLink } from './style';
const URL = process.env.REACT_APP_API_URL;

function ContentInfo({ time, user, writerType, questionId, answerId }) {
  const navigate = useNavigate();

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
          if (res) {
            navigate(to);
            location.reload();
          }
        })
        .catch((error) => console.log(error));
      navigate(to);
    }
  };

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
