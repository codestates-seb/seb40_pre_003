import { BsPrinterFill } from 'react-icons/bs';
import { HiRadio } from 'react-icons/hi2';
import { ImBooks } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import stackicon from '../../../src/assets/images/stackoverflow.png';
import blackstackicon from '../../../src/assets/images/stackoverflow_black_icon2.png';
//BsPrinterFill
//HiRadio

const HeaderModal = ({ setIsOpen }) => {
  const navigate = useNavigate();
  const handleClickLogout = () => {
    navigate('/logout');
    setIsOpen(false);
  };
  return (
    <ModalContent>
      <Title>CURRENT COMMUNITY</Title>
      <LogoutBlock>
        <div>
          <Icon src={stackicon} alt="img" />
          <span>Stack Overflow</span>
        </div>
        <div>
          <Buttons>help</Buttons>
          <Buttons>chat</Buttons>
          <Buttons onClick={handleClickLogout}>log out</Buttons>
        </div>
      </LogoutBlock>

      <Title>YOUR COMMUNITIES</Title>
      <div className="hover">
        <Icon src={blackstackicon} alt="img" />
        <span>Meta Stack Overflow</span>
      </div>

      <Title>MORE STACK EXCHANGE COMMUNITIES</Title>
      <div className="hover">
        <BsPrinterFill />
        <span>Academia</span>
      </div>
      <div className="hover">
        <ImBooks />
        <span>3D printing</span>
      </div>
      <div className="hover">
        <HiRadio />
        <span>Amateur Radio</span>
      </div>
    </ModalContent>
  );
};

export default HeaderModal;

const ModalContent = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(13, 94, 192);
  width: 400px;
  height: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;

  > div {
    padding: 10px;
    padding-left: 20px;
    font-weight: 500;
    font-size: 14px;

    > span {
      margin-left: 10px;
      font-weight: 350;
    }
  }

  > div.hover {
    cursor: pointer;
    :hover {
      background-color: rgb(239, 239, 240);
    }
  }
`;

const Title = styled.div`
  background-color: rgb(239, 239, 240);
  padding: 10px;
  font-size: 13px;
  font-weight: 800;
`;

const LogoutBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: rgb(243, 246, 250);
  cursor: pointer;

  > div {
    color: rgb(13, 94, 192);
    font-weight: 600;
    font-size: 14px;

    > span {
      padding: 4px;
      color: rgb(13, 94, 192);
      font-weight: 700;
      font-size: 13px;
    }
  }
`;

const Buttons = styled.button`
  background-color: rgb(243, 246, 250);
  font-weight: 200;
  font-size: 13px;
  border: 0ch;
  color: rgb(13, 94, 192);
  cursor: pointer;
  :hover {
    //color: #0074cc;
    color: red;
  }
`;

const Icon = styled.img`
  width: 20px;
`;
