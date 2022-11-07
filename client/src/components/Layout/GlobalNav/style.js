import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  max-width: 1264px;
  width: 100%;
`;

export const Logo = styled.img`
  @media screen and (max-width: 640px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
`;

export const ShortLogo = styled.img`
  @media screen and (min-width: 640px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
`;

export const LogoContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  padding: 0 8px;
  :hover {
    background-color: var(--black-075);
  }
`;

export const Header = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  /* height: 58px; */
  border-top: 3px solid #f48224;
  background-color: #f8f9f9;
  width: 100%;
  box-shadow: 0px 1px 2px hsl(210, 8%, 85%);
  z-index: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Button = styled.a`
  display: flex;
  cursor: pointer;
  padding: 6px 12px;
  margin: 2px;
  border-radius: 1000px;
  font-size: 13px;
  :hover {
    background-color: var(--black-075);
  }
`;

export const LoginButton = styled.span`
  display: flex;
  padding: 8px 10.4px;
  border: 1px solid var(--theme-button-filled-border-color);
  border-radius: 3px;
  font-size: 13px;
  color: hsl(205, 47%, 42%);
  cursor: pointer;
  background-color: hsl(205deg 46% 92%);
  :hover {
    background-color: var(--powder-300);
  }
`;

export const SignupButton = styled.span`
  display: flex;
  padding: 8px 10.4px;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 13px;
  color: white;
  cursor: pointer;
  margin-left: 4px;
  background-color: hsl(206, 100%, 52%);
`;

export const RegiLink = styled(Link)`
  text-decoration: none;
`;

export const AferLoginIcons = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-top: 0;
    background-color: #f8f9f9;
    color: black;
    padding: auto 10px;
    border: 1px solid rgba(0, 0, 0, 0);
    :hover {
      background-color: var(--black-075);
    }
    > img {
      width: 24px;
      height: 24px;
      margin: 0px;
    }
  }
`;
