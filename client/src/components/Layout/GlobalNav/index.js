import { Link } from 'react-router-dom';
import logo from '../../../assets/stackoverflow_logo.png';
import Search from '../Search';
import {
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

function GlobalNav() {
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
        <RegiLink to={'/login'}>
          <LoginButton>Log in</LoginButton>
        </RegiLink>
        <RegiLink to={'/signup'}>
          <SignupButton>Sign up</SignupButton>
        </RegiLink>
      </Container>
    </Header>
  );
}

export default GlobalNav;
