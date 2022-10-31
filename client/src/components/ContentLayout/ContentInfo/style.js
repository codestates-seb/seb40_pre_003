import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  padding-top: 4px;
  width: 100%;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: baseline;
  margin: -4px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  font-size: 13px;
  color: var(--black-500);
  margin: 4px;
  font-weight: 500;
  :hover {
    color: var(--black-400);
  }
`;

export const ModalBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0);
`;

export const StopProp = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;

export const EditLink = styled(Link)`
  text-decoration: none;
`;
