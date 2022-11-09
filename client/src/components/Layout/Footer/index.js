import logo from '../../../assets/Stack_Overflow_icon.svg.png';
import {
  Categories,
  Category,
  Container,
  Etc,
  FakeLink,
  FooterContainer,
  HomeLink,
  License,
  Logo,
  LogoContainer,
  Paragraph,
  Sns,
  SnsContainer,
} from './style';

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>
        <Categories>
          <Category>
            <HomeLink to="/">STACK OVERFLOW</HomeLink>
            <FakeLink to="/questions">Questions</FakeLink>
            <FakeLink to="/">Help</FakeLink>
            <></>
          </Category>
          <Category>
            <HomeLink to="/">PRODUCTS</HomeLink>
            <FakeLink to="/">Teams</FakeLink>
            <FakeLink to="/">Advertising</FakeLink>
            <FakeLink to="/">Collectives</FakeLink>
            <FakeLink to="/">Talent</FakeLink>
          </Category>
          <Category>
            <HomeLink to="/">COMPANY</HomeLink>
            <FakeLink to="/">About</FakeLink>
            <FakeLink to="/">Press</FakeLink>
            <FakeLink to="/">Work Here</FakeLink>
            <FakeLink to="/">Legal</FakeLink>
            <FakeLink to="/">Privacy Policy</FakeLink>
            <FakeLink to="/">Terms of Service</FakeLink>
            <FakeLink to="/">Contact Us</FakeLink>
            <FakeLink to="/">Cookie Settings</FakeLink>
            <FakeLink to="/">Cookie Policy</FakeLink>
          </Category>
          <Category>
            <HomeLink to="/">STACK EXCHANGE NETWORK</HomeLink>
            <FakeLink to="/">Technology</FakeLink>
            <FakeLink to="/">Culture & recreation</FakeLink>
            <FakeLink to="/">Life & arts</FakeLink>
            <FakeLink to="/">Science</FakeLink>
            <FakeLink to="/">Professional</FakeLink>
            <FakeLink to="/">Business</FakeLink>
            <FakeLink to="/" className="api">
              API
            </FakeLink>
            <FakeLink to="/">Data</FakeLink>
          </Category>
          <Etc>
            <SnsContainer>
              <Sns>Blog</Sns>
              <Sns>Facebook</Sns>
              <Sns>Twitter</Sns>
              <Sns>LinkedIn</Sns>
              <Sns>Instagram</Sns>
            </SnsContainer>
            <Paragraph>
              <License>
                Site design / logo © 2022 Stack Exchange Inc; user
              </License>
              <License>contributions licensed under CC BY-SA.</License>
              <License>rev 2022.10.25.33519</License>
            </Paragraph>
          </Etc>
        </Categories>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
