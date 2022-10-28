import styled from 'styled-components';

export const Logo = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 7px;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;

  > div.logout_guide {
    font-size: 24px;
    font-weight: 400;
    margin: 20px;
    text-align: center;
    //텍스트 줄간격 벌리기??
  }
`;

export const LogoutBlock = styled.div`
  margin: 10px;
  width: 320px;
  height: 480px;
  padding: 24px;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  > div.linked_site {
    color: hsl(206, 100%, 40%);
    font-size: 15px;
    margin: 2px;
    padding: 3px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
  }

  > div#checkbox {
    font-size: 13px;
    padding: 2px 0px 0px;
    font-weight: 400;
    margin: 20px 0px;
    > span {
      margin-left: 5px;
      font-weight: 500;
    }
  }

  > div#buttons {
    > button#logout_button {
      margin-top: 15px;
      width: 80px;
      height: 50px;
      margin: 2px;
      padding: 10px;
      background-color: #0a95ff;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
      color: white;
      cursor: pointer;
      :hover {
        background-color: #0074cc;
      }
    }

    > button#cancel_button {
      margin-top: 15px;
      width: 80px;
      height: 50px;
      margin: 2px;
      padding: 10px;
      background-color: white;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
      color: #0a95ff;
      cursor: pointer;
      :hover {
        background-color: hsl(205, 46%, 92%);
        //옅은 하늘색으로 바뀌기
      }
    }
  }

  > div#logout_all_device_text {
    font-size: 12px;
    margin: 30px 0px 0px 0px;
    padding: 0px;
    color: #6a737c;
    font-weight: 600;
  }
`;
