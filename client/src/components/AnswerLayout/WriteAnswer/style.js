import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding-top: 20px;
  margin-bottom: 19px;
  font-size: 19px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding: 10px 0 15px 0;
  margin: 24px -2px;
`;

export const NeedLogin = styled.div`
  display: flex;
  margin: 24px 0 0 0;
  > h3 {
    font-size: 21px;
    margin: 4px 0;
    font-weight: 500;
  }
  > h3 > a {
    text-decoration: none;
    color: var(--blue-600);
  }
`;
