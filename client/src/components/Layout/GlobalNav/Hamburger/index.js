import styled from 'styled-components';

function Hamburger({ hamburger, openHamburger }) {
  return <Button onClick={openHamburger}>{hamburger ? 'x' : '='}</Button>;
}

export const Button = styled.button`
  @media screen and (min-width: 640px) {
    display: none;
  }
  background-color: rgba(0, 0, 0, 0);
  color: black;
`;

export default Hamburger;
