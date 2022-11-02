import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  flex: 1 1 auto;
  width: auto;
  /* background-color: white; */
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 7.8px 9.1px 7.8px 9.1px;
  border: 1px solid #babfc3;
  border-radius: 3px;
  width: 100%;
  background-color: white;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 2px;
  width: 100%;
  :focus {
    outline: none;
  }
`;
