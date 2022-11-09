import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-right: 16px;
  width: 100%;
`;

export const VoteLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 16px;
`;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1 1 auto;
  p {
    max-width: 670px;
  }
`;
