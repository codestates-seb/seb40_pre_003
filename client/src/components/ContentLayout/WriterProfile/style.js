import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-top: 4px;
  padding: 5px 6px 7px 7px;
  color: var(--black-500);
  background-color: ${'#d9e9f7'};
  border-radius: 3px;
`;

export const Time = styled.div`
  margin: 1px 0 4px 0;
  font-size: 12px;
`;

export const Profile = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  color: var(--blue-600);
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
`;
