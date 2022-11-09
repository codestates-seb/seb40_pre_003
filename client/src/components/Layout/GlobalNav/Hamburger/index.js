import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import styled from 'styled-components';

function Hamburger({ hamburger, openHamburger }) {
  return (
    <Container>
      <Button onClick={openHamburger}>
        {hamburger ? (
          <GrClose size={'18px'} />
        ) : (
          <GiHamburgerMenu size={'18px'} />
        )}
      </Button>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`;

export const Button = styled.button`
  @media screen and (min-width: 640px) {
    display: none;
  }
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  color: #51595f;
  margin: 0px;
  padding: 0 12px;
`;

export default Hamburger;
