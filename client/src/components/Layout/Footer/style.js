import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--theme-footer-background-color);
  color: white;
  height: 332px;
  padding: 32px 12px 12px 12px;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 124px;
`;

export const LogoContainer = styled.div`
  width: 64px;
  height: 258px;
  /* margin-top: -12px;
  margin-left: -4px;
  margin-bottom: 32px; */
  margin: -12px 12px 32px -4px;
`;

export const Logo = styled.img`
  width: 52px;
`;

export const Categories = styled.div`
  display: flex;
  padding-right: 12px;
  padding-bottom: 24px;
  height: 254px;
  width: 100%;
`;

export const Category = styled.h5`
  display: flex;
  flex-direction: column;
  height: 17px;
  margin-bottom: 12px;
  flex: 1 1 auto;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: var(--theme-footer-title-color);
  margin-bottom: 12px;
`;

export const FakeLink = styled(Link)`
  text-decoration: none;
  color: var(--theme-footer-link-color);
  padding: 4px 0px;
  height: 25px;
  font-weight: 500;
`;

export const Etc = styled.div`
  display: flex;
  flex-direction: column;
  height: 278px;
`;

export const Sns = styled.a`
  text-decoration: none;
  font-size: 11px;
  color: var(--theme-footer-link-color);
  padding: 4px 0px;
  cursor: pointer;
`;

export const SnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const License = styled.p`
  display: flex;
  font-size: 11px;
  justify-content: baseline;
  color: var(--theme-footer-text-color);
  text-align: left;
  width: 100%;
`;

export const Paragraph = styled.div`
  margin-top: auto;
  margin-bottom: 24px;
`;
