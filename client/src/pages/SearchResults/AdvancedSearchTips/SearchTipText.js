import styled from 'styled-components';

const TipTextDiv = styled.div`
  display: grid;
  padding: 10px 0 10px 0;
  align-items: center; // grid로 레이아웃을 해둬서 수직중앙정렬 됨!
  grid-template-columns: 123px 700px;
  font-size: 13px;
  font-weight: normal;
  border-bottom: 0.1px solid gray;
`;
// const TagListDiv = styled.div`
//   display: grid;
//   grid-template-rows: repeat(9, 200px);
//   grid-template-columns: repeat(4, 242px);
//   row-gap: 15px;
//   column-gap: 15px;
// `;

const TipSearchType = styled.div``;
const TipSearchSyntax = styled.div``;

const SearchTipText = ({ data }) => {
  console.log('SearchTip컴포 -> props받은 data : ', data);
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
