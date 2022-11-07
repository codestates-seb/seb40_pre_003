import { Link } from 'react-router-dom';
import logo from '../../../assets/stackoverflow_logo.png';
import shortlogo from '../../../assets/Stack_Overflow_icon.svg.png';
import Search from '../Search';
import {
  AferLoginIcons,
  Button,
  ButtonContainer,
  Container,
  Header,
  LoginButton,
  Logo,
  LogoContainer,
  RegiLink,
  ShortLogo,
  SignupButton,
} from './style';

import inbox from '../../../assets/images/inbox_icon.png';
import userimg from '../../../assets/images/padakmon.png';
import question from '../../../assets/images/question_icon.png';
import trophy from '../../../assets/images/trophy_icon.png';
import HeaderModalButton from '../../HeaderModalButton';
import Hamburger from './Hamburger';

function GlobalNav({ hamburger, openHamburger }) {
  const isLogin =
    localStorage.getItem('accesstoken') !== null ||
    localStorage.getItem('googleAccessToken') !== null;

  return (
    <Header>
      <Container>
        <Hamburger hamburger={hamburger} openHamburger={openHamburger} />
        <Link to={'/'}>
          <LogoContainer>
            <Logo src={logo} />
            <ShortLogo src={shortlogo} />
          </LogoContainer>
        </Link>
        <ButtonContainer>
          {isLogin === null && <Button>About</Button>}
          <Button>Products</Button>
          {isLogin === null && <Button>For Teams</Button>}
        </ButtonContainer>
        <Search />
        {isLogin ? (
          <AferLoginIcons>
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
            <HeaderModalButton />
          </AferLoginIcons>
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
