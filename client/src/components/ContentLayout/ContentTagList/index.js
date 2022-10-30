import Tag from '../../Tag';
import { Container } from './style';

function ContentTagList({ tags }) {
  return (
    tags && (
      <Container>
        {tags.map((name) => (
          <Tag key={name} name={name} />
        ))}
      </Container>
    )
  );
}

export default ContentTagList;
