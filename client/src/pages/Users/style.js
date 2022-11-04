import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  > h1 {
    font-size: 27px;
  }
`;

export const FilterBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 30px 30px 20px;
  > div#input {
    display: flex;
    border: 1px rgb(159, 166, 173) solid;
    border-radius: 5px;
    height: 40px;
    width: 188px;
    margin-left: 20px;
    align-items: center;
    padding: 5px;
    > input {
      font-size: 13px;
      border: none;
      color: 1px rgb(144, 151, 159) solid;
      padding-left: 5px;
    }
  }
`;

export const Buttons = styled.div`
  //position: absolute;
  //right: 290px;
`;

export const TextBlock = styled.div`
  padding: 10px 40px;
  > h2 {
    font-size: 21px;
    font-weight: 400;
    padding: 3px;
  }
  > p {
    font-size: 15px;
    padding: 3px;
    a {
      text-decoration: none;
      color: rgb(0, 116, 204);
    }
  }
`;

export const UserListBlock = styled.div`
  //background-color: yellow;
  //width: 1360px;
  width: 100%; //이걸로 하면 wrap가능
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
`;
