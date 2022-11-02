import { HiPencil } from 'react-icons/hi';
import metaIcon from '../../assets/meta.png';
import stackIcon from '../../assets/stackoverflow-black.svg';
import {
  Container,
  Header,
  IconContainer,
  Item,
  Li,
  Logo,
  Text,
} from './style';

function SideBarWidget() {
  return (
    <Container>
      <Header>The Overflow Blog</Header>
      <Item>
        <Li>
          <IconContainer>
            <HiPencil size="14px" />
          </IconContainer>
          <Text>
            Introducing the Ask Wizard: Your guide to crafting high-quality
            questions
          </Text>
        </Li>
        <Li>
          <IconContainer>
            <HiPencil size="14px" />
          </IconContainer>
          <Text>
            How to get more engineers entangled with quantum computing (Ep. 501)
          </Text>
        </Li>
      </Item>
      <Header>Featured on Meta</Header>
      <Item className="last">
        <Li>
          <IconContainer>
            <Logo src={metaIcon} pixel={'19px'} />
          </IconContainer>
          <Text>The 2022 Community-a-thon has begun!</Text>
        </Li>
        <Li>
          <IconContainer>
            <Logo src={metaIcon} pixel={'19px'} />
          </IconContainer>
          <Text>Mobile app infrastructure being decommissioned</Text>
        </Li>
        <Li>
          <IconContainer>
            <Logo src={stackIcon} pixel={'14px'} />
          </IconContainer>
          <Text>Staging Ground Workflow: Canned Comments</Text>
        </Li>
        <Li>
          <IconContainer>
            <Logo src={stackIcon} pixel={'14px'} />
          </IconContainer>
          <Text>The Ask Wizard (2022) has graduated</Text>
        </Li>
      </Item>
    </Container>
  );
}

export default SideBarWidget;
