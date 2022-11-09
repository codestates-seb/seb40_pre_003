import styled from 'styled-components';

export const AnswerButton = styled.button`
  background-color: #0995ff;
  font-family: inherit;
  font-weight: 500;
  color: white;
  padding: 10.4px;
  margin: 0 2px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  outline: none;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  }
`;
