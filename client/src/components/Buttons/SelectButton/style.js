import styled from 'styled-components';

export const Buttons = styled.div`
  > .btn {
    background-color: white;
    border: 1px rgb(159, 166, 173) solid;
    font-weight: 400;
    color: rgb(159, 166, 173);
    font-size: 13px;
    flex-wrap: nowrap;
    height: 40px;
    width: auto;
    margin: 0;

    &.active {
      background-color: rgb(221, 224, 227);
      color: rgb(60, 65, 69);
      font-weight: 200;
    }
  }
  > #left-radius {
    border-radius: 5px 0px 0px 5px;
  }
  > #right-radius {
    border-radius: 0px 5px 5px 0px;
  }
`;
