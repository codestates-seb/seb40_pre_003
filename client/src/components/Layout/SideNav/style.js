import { IoEarthSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 640px) {
    min-width: 240px;
  }
  display: flex;
  flex-direction: column;
  position: sticky;
  border-right: 1px solid #d6d9dc;
  padding-top: 24px;
  padding-bottom: 24px;
  height: 100%;
`;

export const HomeLink = styled(Link)`
  font-size: 13px;
  text-decoration: none;
  width: 152px;
  height: 26px;
  padding: 4px 4px 4px 8px;
  color: var(--black-600);
  font-weight: 500;
  :hover {
    color: var(--black-800);
  }
`;

export const MyIoEarthSharp = styled(IoEarthSharp)`
  margin-right: 4px;
`;

export const Questions = styled.div`
  padding: 4px 8px 4px 0px;
  background-color: ${(props) =>
    props.selected ? 'var(--black-050)' : 'none'};
  font-weight: ${(props) => (props.selected ? 'bold' : 'none')};
  color: ${(props) =>
    props.selected ? 'var(--black-900)' : 'var(--black-600)'};
  border-right: 3px solid
    ${(props) => (props.selected ? 'var(--theme-primary-color)' : 'none')};
`;

export const PublicList = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px 4px 0px;
  background-color: ${(props) =>
    props.selected ? 'var(--black-050)' : 'none'};
  font-weight: ${(props) => (props.selected ? 'bold' : 'none')};
  color: ${(props) =>
    props.selected ? 'var(--black-900)' : 'var(--black-600)'};
  border-right: 3px solid
    ${(props) => (props.selected ? 'var(--theme-primary-color)' : 'none')};

  /* padding: 4px 4px 4px 30px; */
`;

export const QuestionsLink = styled(Link)`
  padding: 4px 4px 4px 8px;
  display: flex;
  align-items: center;
  font-size: 13px;
  text-decoration: none;
  /* color: var(--black-600); */
  color: inherit;

  /* border-right: 3px; */
  width: 130px;
  height: 26px;

  :hover {
    color: var(--black-900);
  }
`;

export const PublicLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 13px;
  text-decoration: none;
  /* color: var(--black-600); */
  color: inherit;
  /* padding: 8px 6px 8px 8px; */
  padding: 4px 4px 4px 30px;

  border-right: 3px;
  width: 130px;
  height: 26px;

  :hover {
    color: var(--black-900);
  }
`;

export const Ol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  /* margin: 16px 0 4px 8px; */
  /* height: 100%; */
`;

export const Name = styled.div`
  margin: 16px 0 4px 8px;
  color: var(--fc-light);
  /* height: 100%; */
`;

export const End = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 1 1 auto; */
  height: 600px;
`;
