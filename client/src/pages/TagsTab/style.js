import styled from 'styled-components';

export const TagContainer = styled.div`
  display: flex;
  padding: 24px;
`;
export const TagMain = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TagsTabHead = styled.div`
  padding-right: 366px;
  h1 {
    font-size: 27px;
    margin-bottom: 20px;
    box-sizing: inherit;
    text-align: left;
  }
  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
  div {
    margin-bottom: 20px;
  }
  div > div {
    font-size: 14px;
    color: #0074cc;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 190px;
  height: 40px;
  align-items: center;
  padding: 7.8px 9.1px 7.8px 9.1px;
  border: 1px solid #babfc3;
  border-radius: 3px;
  background-color: white;
`;

export const Input = styled.input`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 2px;
  :focus {
    outline: none;
  }
`;
