import styled from 'styled-components';

export const Container = styled.div``;

export const TitleContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: auto;
`;

export const Title = styled.h1`
  display: flex;
  font-size: 27px;
  font-weight: normal;
  margin-right: 8px;
  margin-bottom: 8px;
  height: auto;
  word-break: break-all;
`;

export const FiguresContainer = styled.section`
  display: flex;
  height: 25;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--black-075);
  margin-bottom: 16px;
`;

export const Figure = styled.div`
  height: 17px;
  margin: 0 16px 8px 0;
  font-weight: 500;
`;

export const FigureName = styled.span`
  font-size: 13px;
  color: var(--fc-light);
  margin-right: 2px;
  font-weight: inherit;
`;

export const FigureContent = styled.span`
  font-size: 13px;
  color: #232629;
  margin-left: 2px;
  font-weight: inherit;
`;
