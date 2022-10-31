import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/stackoverflow_logo.png';
import Search from '../Search';
import {
  AferLoinIcons,
  Button,
  ButtonContainer,
  Container,
  Header,
  LoginButton,
  Logo,
  LogoContainer,
  RegiLink,
  SignupButton,
} from './style';

import inbox from '../../../assets/images/inbox_icon.png';
import message from '../../../assets/images/message_icon.png';
import question from '../../../assets/images/question_icon.png';
import trophy from '../../../assets/images/trophy_icon.png';
import userimg from '../../../assets/images/userimg_icon.png';

function GlobalNav() {
  const navigate = useNavigate();

  //const isLogin = useSelector((state) => state.isLogin);
  const isLogin = localStorage.getItem('accesstoken');
  console.log('헤더 이즈로그인:', isLogin);
  const handleClickLogout = () => {
    navigate('/logout');
  };
  console.log('로컬스토리지액세스토큰', localStorage.getItem('accesstoken'));

  return (
    <Header>
      <Container>
        <Link to={'/'}>
          <LogoContainer>
            <Logo src={logo} />
          </LogoContainer>
        </Link>
        <ButtonContainer>
          <Button>About</Button>
          <Button>Products</Button>
          <Button>For Teams</Button>
        </ButtonContainer>
        <Search />
        {isLogin !== null ? (
          <AferLoinIcons>
            <button>
              <img src={userimg} alt="img" />
            </button>
            <button>
              <img src={inbox} alt="img" />
            </button>
            <button>
              <img src={trophy} alt="img" />
            </button>
            <button>
              <img src={question} alt="img" />
            </button>
            <button>
              <img src={message} alt="img" />
            </button>
            <button onClick={handleClickLogout}>로그아웃</button>
          </AferLoinIcons>
        ) : (
          <>
            <RegiLink to={'/login'}>
              <LoginButton>Log in</LoginButton>
            </RegiLink>
            <RegiLink to={'/signup'}>
              <SignupButton>Sign up</SignupButton>
            </RegiLink>
          </>
        )}
      </Container>
    </Header>
  );
}

export default GlobalNav;
