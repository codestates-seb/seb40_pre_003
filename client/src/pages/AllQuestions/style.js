import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 24px 24px 0 0;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// 타이틀(Top Questions),버튼(Ask Question) 등 묶음 -> HomeHead
export const AllQuestionsHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 0 20px;
`;

// Top Questions 라고 쓰여진 상단 제목
export const AllQuestionsTitle = styled.span`
  font-size: 27px;
  /* margin-top: 19.5px; */
`;

// Ask Question 버튼
export const AskQuestionButtonLink = styled(Link)`
  text-align: center;
  position: relative;
  display: inline-block;
  padding: 0.8em;
  background-color: #0995ff;
  font-size: 12.9px;
  font-family: inherit;
  font-weight: normal;
  color: white;
  width: 103px;
  height: 37px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  outline: none;
  margin-top: 19.5px;
  text-decoration-line: none;
  cursor: pointer;
`;

// 질문글 갯수
export const Total = styled.div`
  margin: 20px 0 27px 23px;
  font-size: 20px;
`;
