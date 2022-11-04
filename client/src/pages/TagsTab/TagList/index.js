// TagsTab에서 데이터를 props로 받아주고 Tags 컴포넌트로 맵핑해주는곳
import Tags from '../Tags';
import styled from 'styled-components';

const TagListDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(9, 200px);
  grid-template-columns: repeat(4, 242px);
  row-gap: 15px;
  column-gap: 15px;
`;

const TagList = ({ tagData }) => {
  console.log(
    'TagList컴포 -> TagsTab으로부터 받은 props -> tagData): ',
    tagData
  );
  return (
    <TagListDiv>
      {tagData && tagData.tags.map((el) => <Tags key={el.id} list={el} />)}
    </TagListDiv>
  );
};

export default TagList;
