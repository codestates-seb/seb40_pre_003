import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 980px) {
    display: none;
  }
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
