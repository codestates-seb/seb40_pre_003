import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import UserCard from '../../components/UserCard';
import { Buttons, Container, FilterBlock, UserListBlock } from './style';
const URL = process.env.REACT_APP_API_URL;

const Users = () => {
  const [users, setUsers] = useState([]);
  //셀렉트 버튼
  const name = ['Reputation', 'New users', 'Voters', 'Editors', 'Moderators'];
  const [btnActive, setBtnActive] = useState(4);
  const [order, setOrder] = useState('');

  useEffect(() => {
    console.log('order: ', order);
    //버튼이 안되면
    axios
      .get(`${URL}/api/users`, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      })
      .then((res) => setUsers(res.data.users))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (e) => {
    setBtnActive(e.target.value);
    setOrder(name[e.target.value].toLowerCase());
    axios
      .get(
        btnActive === 0 || btnActive === 2
          ? `${URL}/api/users?order=${order}`
          : `${URL}/api/users`,
        {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          },
        }
      )
      .then((res) => {
        setUsers(res.data.users);
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <h1>Users</h1>
      <FilterBlock>
        <div id="input">
          <AiOutlineSearch color="rgb(159, 166, 173)" />
          <input placeholder="Filter by user"></input>
        </div>
        <Buttons>
          {name.map((ele, index) => (
            <button
              onClick={handleClick}
              key={ele}
              value={index}
              className={'btn' + (index === Number(btnActive) ? ' active' : '')}
              id={
                (index === 0 ? 'left-radius' : '') ||
                (index === 4 ? 'right-radius' : '')
              }
            >
              {ele}
            </button>
          ))}
        </Buttons>
      </FilterBlock>

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
