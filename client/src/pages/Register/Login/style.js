import styled from 'styled-components';

export const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f1f2f3;

  > div:first-of-type {
    /* flex-basis: 10%; */
    > img {
      width: 70px;
      height: 70px;
    }
    margin-bottom: 10px;
  }

  > section.social_login {
    /* flex-basis: 20%; */

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 316px;
      height: 138px;
    }

    > div > button {
      /* width: 316px; */
      height: 38px;
      margin: 4px;
      border: 1px;
      border-radius: 5px;
      cursor: pointer;

      :first-of-type {
        background-color: white;
        :hover {
          background-color: #f8f9f9;
        }
      }
      :nth-of-type(2) {
        background-color: #232628;
        color: white;
        :hover {
          background-color: black;
        }
      }
      :nth-of-type(3) {
        background-color: #3a5796;
        color: white;
        :hover {
          background-color: #304a86;
        }
      }
    }

    > div > button .icons {
      margin-right: 10px;
    }
  }

  > section.email_login {
    margin: 10px;
    width: 280px;
    height: 250px;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    > form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      width: 268px;
    }

    > form > div {
      height: 80px;
      margin: 6px 0;
      display: flex;
      flex-direction: column;

      > label {
        flex-basis: 25%;
        margin: 2px 0;
        font-size: 14px;
      }

      > input {
        flex-basis: 45%;
        width: 270px;
      }
      > p {
        flex-basis: 30%;
        font-size: 12px;
        padding: 2px;
      }
      > div.msg {
        color: red;
        font-size: 15px;
      }
    }

    > form > button {
      margin-top: 15px;
      width: 280px;
      height: 38px;
      background-color: #0a95ff;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      color: white;
      cursor: pointer;

      :hover {
        background-color: #0074cc;
      }
    }
  }

  > div.login_guide {
    width: 290px;
    text-align: center;
    font-size: 15px;
    margin: 10px;

    > div > a {
      text-decoration-line: none;
    }
  }
`;
