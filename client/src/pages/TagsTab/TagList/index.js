import Tags from '../Tags';
import { TagListDiv } from './style';

const TagList = ({ tagData }) => {
  return (
    <TagListDiv>
      {tagData && tagData.tags.map((el) => <Tags key={el.id} list={el} />)}
    </TagListDiv>
  );
};

export default TagList;
