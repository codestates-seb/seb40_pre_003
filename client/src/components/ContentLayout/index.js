import VoteCell from '../VoteCell';
import { Container, ContentBody, VoteLayout } from './style';

function ContentLayout({ testdata }) {
  console.log(testdata);
  return (
    <Container>
      <VoteLayout>
        <VoteCell score={testdata.score} />
      </VoteLayout>
      <ContentBody>{/* view 설치해야함 */}</ContentBody>
    </Container>
  );
}

export default ContentLayout;
