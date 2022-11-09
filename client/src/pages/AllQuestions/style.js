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
  flex: 1 1 auto;
`;

export const AllQuestionsHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 0 20px;
`;

export const AllQuestionsTitle = styled.span`
  font-size: 27px;
`;

export const Total = styled.div`
  margin: 20px 0 27px 23px;
  font-size: 20px;
`;

export const PaginationContainer = styled.div`
  border-top: 1px solid #d6d9dc;
  padding: 60px 20px 20px 20px;
`;
