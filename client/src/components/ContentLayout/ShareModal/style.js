import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  padding: 12px;
  background-color: rgb(255, 255, 255);
  border-radius: 7px;
  border: var(--black-100) solid 2px;
  z-index: 1;
  box-shadow: rgb(0 0 0 / 6%) 0px 1px 3px, rgb(0 0 0 / 6%) 0px 2px 6px,
    rgb(0 0 0 / 9%) 0px 3px 8px;
`;
