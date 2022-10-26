import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  border-right: 1px solid #d6d9dc;
  padding-top: 24px;
`;

export const HomeLink = styled(Link)`
  font-size: 13px;
  text-decoration: none;
  width: 152px;
  height: 26px;
  padding: 4px 4px 4px 8px;
`;

export const PublicList = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 4px 4px 30px;
`;
export const PublicLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 13px;
  text-decoration: none;
  /* padding: 8px 6px 8px 8px; */
  border-right: 3px;
  width: 130px;
  height: 26px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  /* margin: 16px 0 4px 8px; */
`;

export const Name = styled.div`
  margin: 16px 0 4px 8px;
`;
