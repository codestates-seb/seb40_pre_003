import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  // width: 100% 주면 큰 화면에서 정렬이 완전 오른쪽 끝으로감...
  width: 100%;
  padding: 24px 24px 0 0;
`;

export const Main = styled.div`
  display: flex;
  /* width: 100%; */
  flex-direction: column;
  flex: 1 1 auto;
`;

// 타이틀(Top Questions),버튼(Ask Question) 등 묶음 -> HomeHead
export const HomeHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 0 20px;
  /* button {
    margin-top: 19.
  } */
`;

// Top Questions 라고 쓰여진 상단 제목
export const TopQuestionsTitle = styled.span`
  font-size: 27px;
`;

// 질문글 갯수
export const Total = styled.div`
  margin: 20px 0 27px 23px;
  font-size: 20px;
`;
