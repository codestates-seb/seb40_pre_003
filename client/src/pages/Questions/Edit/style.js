import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 24px;
`;

export const TagContainer = styled.div`
  margin-top: 30px;
`;

export const H2 = styled.h2`
  font-size: 15px;
  /* margin-top: 30px; */
  margin-bottom: 6px;
  font-weight: 600;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Side = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: fit-content;
  margin: 0 0 15px 24px;
  border: 1px solid hsl(210deg 8% 85%);
  border-top: none;
  border-color: var(--yellow-200);
  border-radius: 3px;
  background-color: var(--yellow-050);
  box-shadow: rgb(0 0 0 / 5%) 0px 1px 2px, rgb(0 0 0 / 5%) 0px 1px 4px,
    rgb(0 0 0 / 5%) 0px 2px 8px; ;
`;

export const InputTitleDiv = styled.div`
  /* width: 790px; */
  /* margin-top: 30px; */
  margin-bottom: 30px;
  border-radius: 3px;
  div > div {
    font-size: 15px;
    /* font-weight: bolder; */
    margin-bottom: 8px;
  }
  div > p {
    margin-bottom: 10px;
    font-size: 14px;
    color: #3b4045;
  }
  input {
    width: 100%;
    height: 40px;
    border: 1px solid #babfc4;
    border-radius: 3px;
    padding-left: 8px;
  }
  button {
    margin-top: 8px;
    position: relative;
    display: inline-block;
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
    background-color: #0a95ff;
    color: white;
    padding: 0.8em;
    font-size: 14px;
    outline: none;
    font-weight: normal;
    text-align: center;
    cursor: pointer;
  }
`;

/* Toast Editor 감쌀 div */
export const ToastDiv = styled.div`
  /* width: 790px; */
  /* margin-top: 30px; */
  border-radius: 3px;

  div > div {
    margin-bottom: 8px;
  }
  div > p {
    color: #3b4045;
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

/* Tag -> 문구, 설명, 인풋창 부분 감쌀 div */
export const TagDiv = styled.div`
  width: 790px;
  margin-top: 30px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: 1px solid #d6d9dc;
  /* height: 208px; */
  padding: 35px 30px 15px 30px;
  div > div {
    font-size: 17px;
    font-weight: bolder;
    margin-bottom: 8px;
  }
  div > p {
    color: #3b4045;
    font-size: 14px;
    margin-bottom: 8px;
  }
  /* input {
    width: 730px;
    height: 40px;
    border: 1px solid #babfc4;
    border-radius: 3px;
    padding-left: 8px;
  } */
  button {
    margin-top: 8px;
    position: relative;
    display: inline-block;
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
    background-color: #0a95ff;
    color: white;
    padding: 0.8em;
    font-size: 14px;
    outline: none;
    font-weight: normal;
    text-align: center;
    cursor: pointer;
  }
`;

export const Widget = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  background-color: var(--yellow-100);
  /* border-top-left-radius: 3px;
  border-top-right-radius: 3px; */
  border-top: 1px solid var(--yellow-200);

  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: var(--yellow-200);
  padding: 12px 15px;
  font-size: 12px;
  color: var(--black-600);
  font-weight: bold;
`;

export const Item = styled.div`
  /* background-color: var(--yellow-050); */
  /* border-bottom: 1px solid var(--yellow-200); */
  /* .last {
    border-bottom: none;
  } */
`;

export const Li = styled.div`
  display: flex;
  margin: 12px 0;
  padding: 0 16px;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: 13px;
`;

export const Pencilcase = styled.div`
  display: flex;
  padding-top: 1px;
  padding-right: 8px;
`;

export const IconContainer = styled.div`
  display: flex;
  padding-top: 1px;
  padding-right: 8px;
`;

export const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.pixel};
  height: ${(props) => props.pixel};
  /* margin: -2px -3px 0 -2px; */
  margin: ${(props) => (props.pixel === '19px' ? '-2px -3px 0 -2px' : '0')};
`;
