import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Viewer } from '@toast-ui/react-editor';
import Prism from 'prismjs';

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
// import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

import VoteCell from '../VoteCell';
import ContentTagList from './ContentTagList';
import { Container, ContentBody, VoteLayout } from './style';

function ContentLayout({ testdata }) {
  // console.log(testdata);

  return (
    <Container>
      <VoteLayout>
        <VoteCell score={testdata.score} />
      </VoteLayout>
      <ContentBody>
        <Viewer
          initialValue={testdata.body}
          plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        />
        <ContentTagList />
      </ContentBody>
    </Container>
  );
}

export default ContentLayout;
