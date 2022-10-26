import {
  Container,
  HomeLink,
  List,
  Name,
  PublicLink,
  PublicList,
} from './style';

function SideNav() {
  return (
    <Container>
      <HomeLink to="/">Home</HomeLink>
      <List>
        <Name>PUBLIC</Name>
        <PublicList>
          <PublicLink to="/questions">Questions</PublicLink>
        </PublicList>
        <PublicList>
          <PublicLink to="/tags">Tags</PublicLink>
        </PublicList>
        <PublicList>
          <PublicLink to="/users">Users</PublicLink>
        </PublicList>
      </List>
      <List>
        <Name>TEAMS</Name>
      </List>
    </Container>
  );
}

export default SideNav;
