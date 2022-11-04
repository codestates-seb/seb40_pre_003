import styled from 'styled-components';
//카드 내부 스타일
export const CardContainer = styled.div`
  display: flex;
  //border: 1px red solid;
  width: 330px;
  padding: 20px;
  cursor: pointer;
  :hover {
    background-color: rgb(65, 71, 77);
    /* width: 350px;
    height: 130px; */
    transform: scale(1.2); //1.2배 확대
    border-radius: 5px;
    box-shadow: 0px 2px 2px rgb(0 0 0 / 50%);
    transition-duration: 0.5s;
    div#displayname {
      color: gold;
      //font-size: 17px;
    }
    div#answercount {
      color: white;
      //font-size: 15px;
    }
    div > span {
      color: white;
      //font-size: 15px;
    }
    //호버효과 이미지 확대...안될 수도 있음ㅎ
    IMG {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
      width: 85px;
      height: 85px;
      padding: 10px;
    }
  }
`;
export const IMG = styled.img`
  width: 60px;
  height: 60px;
`;

export const TextBlock = styled.div`
  margin-left: 20px;
  :hover {
    background-color: rgb(65, 71, 77);
  }
  div#displayname {
    font-weight: 700;
    color: hsl(206, 100%, 40%);
    font-size: 15px;
  }
  div#answercount {
    color: rgb(106, 115, 124);
    font-size: 15px;
    margin-top: 3px;
  }
  div > span {
    margin-right: 5px;
    color: hsl(206, 100%, 40%);
    font-size: 12px;
    font-weight: 700;
  }
`;
