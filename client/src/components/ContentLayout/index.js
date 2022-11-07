import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Viewer } from '@toast-ui/react-editor';
import Prism from 'prismjs';

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
// import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

import VoteCell from '../VoteCell';
import ContentInfo from './ContentInfo';
import ContentTagList from './ContentTagList';
import { Container, ContentBody, VoteLayout } from './style';

function ContentLayout({ testdata, questionId, answerId }) {
  let writerType;
  if (answerId) {
    writerType = 'answerer';
  } else {
    writerType = 'questioner';
  }
  return (
    testdata && (
      <Container>
        <VoteLayout>
          <VoteCell
            questionId={questionId}
            score={testdata.score}
            answerId={answerId}
          />
        </VoteLayout>
        <ContentBody>
          <Viewer
            initialValue={testdata.body ? testdata.body : testdata.contents}
            plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          />
          {testdata.tags && <ContentTagList tags={testdata.tags} />}
          <ContentInfo
            time={testdata.createdAt}
            user={testdata.user}
            writerType={writerType}
            questionId={questionId}
            answerId={answerId}
          />
        </ContentBody>
      </Container>
    )
  );
}

export default ContentLayout;
