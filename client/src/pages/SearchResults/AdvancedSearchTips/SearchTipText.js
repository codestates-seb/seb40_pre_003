import styled from 'styled-components';

const TipTextDiv = styled.div`
  display: grid;
  padding: 10px 0 10px 0;
  align-items: center;
  grid-template-columns: 123px 700px;
  font-size: 13px;
  font-weight: normal;
  border-bottom: 0.1px solid gray;
`;

const TipSearchType = styled.div``;
const TipSearchSyntax = styled.div``;

const SearchTipText = ({ data }) => {
  return (
    <div>
      <TipTextDiv>
        <TipSearchType>{data.type}asd</TipSearchType>
        <TipSearchSyntax>
          {data.body.length > 1
            ? data.body.map((el) => <div key={el.id}>{el}</div>)
            : data.body}
        </TipSearchSyntax>
      </TipTextDiv>
    </div>
  );
};

export default SearchTipText;
