import Tags from '../Tags';
import { TagListDiv } from './style';

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
