import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import SelectButton from '../../components/Buttons/SelectButton';
import UserCard from '../../components/UserCard';
import { Container, FilterBlock, TextBlock, UserListBlock } from './style';

const Users = () => {
  const [users, setUsers] = useState([]);

  //제이슨 서버: cd client/src/pages/Users  //json-server --watch data.json --port 8000
  useEffect(() => {
    axios
      .get('http://localhost:8000/users')
      //.get('/api/users', {
      //   headers: {
      //     'Content-Type': 'application/json;charset=UTF-8',
      //     'Access-Control-Allow-Origin': '*',
      //     'ngrok-skip-browser-warning': '111',
      //   },
      // })
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  }, []);

  console.log('유저스', users);

  return (
    <Container>
      <h1>Users</h1>
      <FilterBlock>
        <div id="input">
          <AiOutlineSearch color="rgb(159, 166, 173)" />
          <input placeholder="Filter by user"></input>
        </div>
        <SelectButton />
      </FilterBlock>
      <TextBlock>
        <h2>Who are the moderators?</h2>
        <p>
          We believe moderation starts with the community itself, so in addition
          to{' '}
          <a href="https://stackoverflow.com/help/privileges">
            privileges earned through reputation
          </a>
          , we periodically hold
          <a href="https://stackoverflow.blog/2010/12/02/stack-exchange-moderator-elections-begin/?_ga=2.54979629.784071325.1667457282-223063629.1667455143">
            {' '}
            democratic moderator elections
          </a>
          .
        </p>
        <p>
          Please see{' '}
          <a href="https://stackoverflow.blog/2009/05/18/a-theory-of-moderation/?_ga=2.54979629.784071325.1667457282-223063629.1667455143">
            A Theory of Moderation
          </a>{' '}
          for information on our moderation philosophy.
        </p>
      </TextBlock>
      <UserListBlock>
        {users.map((ele) => (
          <div key={ele.userId}>
            <UserCard
              img={ele.img}
              displayName={ele.displayName}
              answerCount={ele.answerCount}
              userId={ele.userId}
              tags={ele.tags}
            />
          </div>
        ))}
      </UserListBlock>
    </Container>
  );
};

export default Users;
