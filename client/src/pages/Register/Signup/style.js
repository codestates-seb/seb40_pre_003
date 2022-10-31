import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: #f1f2f3;

  > div.signup_ad {
    padding-left: 70px;

    > div {
      margin: 15px 15px 15px 0px;
      .icons {
        color: #0074cc;
        margin-right: 10px;
      }
    }
  }
`;

export const SignupBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 700px;
  background-color: #f1f2f3;

  > div:first-of-type {
    /* flex-basis: 10%; */
    > img {
      width: 70px;
      height: 70px;
    }
    margin-bottom: 10px;
  }
  /* 반복되는 로그인스타일을 가입으로 가져왔는데...social_login을 social_btn으로 하면 더 좋았을 듯하다 */
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
        color: black;
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
    width: 310px;
    height: 380px;
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
        text-align: left;
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
      width: 270px;
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
      margin-left: 5px;
    }
  }
`;
