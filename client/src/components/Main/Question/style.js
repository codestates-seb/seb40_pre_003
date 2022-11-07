import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const QuBox = styled.div`
  padding: 15px 0 10px 0;
  border-top: 1px solid #d6d9dc;
`;

export const QuList = styled.li`
  display: flex;
  margin-top: 10px;
  height: 105px;
`;

export const LeftSection = styled.section`
  width: 108px;
`;

export const CountBox = styled.div`
  font-size: 13px;
  text-align: right;
`;

export const VotesCount = styled.div`
  color: #0c0d0e;
  font-weight: bolder;
`;

export const AnswerCount = styled.button`
  border: 1px solid #2f6f44;
  border-radius: 3px;
  background-color: white;
  padding: 3px;
  color: #2f6f44;
`;

export const ViewsCount = styled.div`
  color: #6a737c;
`;

export const RightSection = styled.section`
  width: 100%;
  margin: 0 0 0 20px;
  font-size: 17px;
`;

export const TextSection = styled.section``;

export const QuestionTitle = styled(Link)`
  text-decoration: none;
  color: #0063bf;
  font-weight: 500;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  cursor: pointer;
`;

export const QuestionText = styled.p`
  font-size: 13px;
  margin-top: 5px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const TagInfoFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 30px 60px 0 0;
  height: 27px;
`;

export const TagBox = styled.div`
  width: 360px;
  height: 27px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: horizontal;
`;

export const TagBtn = styled.button`
  height: 23px;
  padding: 0.4em 0.5em;
  margin: 2px;
  border: none;
  border-radius: 3px;
  background-color: #e1ecf4;
  text-align: center;
  font-size: 12px;
  color: rgb(57, 115, 157);

  cursor: pointer;
`;

export const InfoBox = styled.div`
  display: flex;
  column-gap: 6px;
`;

export const InfoName = styled.a`
  min-width: 0;
  height: 12px;
  font-size: 14px;
  font-weight: bolder;
  color: #0074cc;
`;

export const LastTime = styled.div`
  min-width: 0;
  height: 15px;
  font-size: 14px;
  color: #6a737c;
`;
