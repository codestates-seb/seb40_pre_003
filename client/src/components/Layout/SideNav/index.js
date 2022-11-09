import { useLocation } from 'react-router-dom';
import {
  Container,
  HomeLink,
  List,
  MyIoEarthSharp,
  Name,
  Ol,
  PublicLink,
  PublicList,
  Questions,
  QuestionsLink,
} from './style';

function SideNav() {
  const { pathname } = useLocation();

  return (
    <Container>
      <HomeLink to="/">Home</HomeLink>
      <List>
        <Name>PUBLIC</Name>
        <Ol>
          <Questions selected={pathname === '/questions' ? true : false}>
            <QuestionsLink to="/questions">
              <MyIoEarthSharp size="18px" />
              Questions
            </QuestionsLink>
          </Questions>
          <PublicList selected={pathname === '/tags' ? true : false}>
            <PublicLink to="/tags">Tags</PublicLink>
          </PublicList>
          <PublicList selected={pathname === '/users' ? true : false}>
            <PublicLink to="/users">Users</PublicLink>
          </PublicList>
        </Ol>
      </List>
      <List>
        <Name>TEAMS</Name>
      </List>
    </Container>
  );
}

export default SideNav;
