import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f2f3;

  > div.logout_guide {
    font-size: 28px;
    font-weight: 16px;
    margin: 20px;
    text-align: center;
    //텍스트 줄간격 벌리기??
  }
`;

const LogoutBlock = styled.div`
  margin: 10px;
  width: 300px;
  height: 430px;
  padding: 24px;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  > div.linked_site {
    color: hsl(206, 100%, 40%);
    font-size: 15px;
    margin: 4px;
    padding: 4px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
  }

  > div#checkbox {
    font-size: 14px;
    padding: 2px 0px 0px;
    font-weight: 600;
    margin: 20px 0px;
    > span {
      margin-left: 5px;
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
    font-size: 14px;
    margin: 30px 3px 5px 5px;
    padding: 2px;
    color: #6a737c;
    font-weight: 400;
  }
`;

export default function Logout() {
  return (
    <Container>
      <div className="logout_guide">
        Clicking “Log out” will log you out of the following <br></br>domains on
        this device:
      </div>
      <LogoutBlock>
        <div className="linked_site">askubuntu.com</div>
        <div className="linked_site">mathoverflow.net</div>
        <div className="linked_site">serverfault.com</div>
        <div className="linked_site">stackapp.com</div>
        <div className="linked_site">stackexchange.com</div>
        <div className="linked_site">stackoverflow.com</div>
        <div className="linked_site">superuser.com</div>
        <hr></hr>
        <div id="checkbox">
          <input type={'checkbox'}></input>
          <span>Log out on all devices</span>
        </div>
        <div id="buttons">
          <button id="logout_button">Log out</button>
          <button id="cancel_button">Cancel</button>
        </div>
        <div id="logout_all_device_text">
          If you’re on a shared computer, remember to
          <br />
          log out of your Open ID provider (Facebook,
          <br />
          Google, Stack Exchange, etc.) as well.
        </div>
      </LogoutBlock>
    </Container>
  );
}
