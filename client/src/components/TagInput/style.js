import styled from 'styled-components';

export const TagsInput = styled.div`
  /* margin: 8rem auto; */
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  /* min-height: 48px; */
  width: 100%;
  padding: 2px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;
  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    /* margin: 8px 0 0 0; */
    > .tag {
      width: auto;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--powder-700);
      padding: 0 4px;
      margin: 2px;
      border: 1px solid transparent;
      font-size: 12px;
      list-style: none;
      border-radius: 3px;
      /* margin: 0 8px 8px 0; */
      background: var(--powder-100);
      > .tag-title {
        color: var(--powder-700);
      }
      > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 18px;
        margin-left: 8px;
        color: var(--powder-700);
        cursor: pointer;
      }
    }
  }
  > input {
    display: flex;
    align-items: center;
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0);
    /* height: 24px; */
    font-size: 13px;
    padding: 4px;
    margin: 2px;
    :focus {
      outline: transparent;
    }
  }
  /* &:focus-within {
    border: 1px solid var(--coz-purple-600);
  } */
`;
