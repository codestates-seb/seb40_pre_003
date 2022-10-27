import styled from 'styled-components';

// 타이틀(Top Questions),버튼(Ask Question) 등 묶음 -> HomeHead
export const HomeHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 20px;
`;

// Top Questions 라고 쓰여진 상단 제목
export const TopQuestionsTitle = styled.span`
  font-size: 27px;
  margin-top: 19.5px;
`;

// Ask Question 버튼
export const AskQuestionButton = styled.button`
  background-color: #0995ff;
  font-family: inherit;
  font-weight: bolder;
  color: white;
  width: 103px;
  height: 37px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  outline: none;
  margin-top: 19.5px;
  cursor: pointer;
`;

// 질문글 갯수
const Total = styled.div`
  margin: 20px 0 27px 23px;
  font-size: 20px;
`;
