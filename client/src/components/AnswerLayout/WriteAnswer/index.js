import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { useRef } from 'react';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { isLogin } from '../../../util/isLogin';
import PostAnswerButton from '../../Buttons/PostAnswerButton';
import { ButtonContainer, Container, Header, NeedLogin } from './style';
const URL = process.env.REACT_APP_API_URL;

function WriteAnswer() {
  const { id } = useParams();
  let editorRef = useRef();

  const handlePostAnswer = () => {
    const markdownValue = editorRef.current.getInstance().getMarkdown();
    axios
      .post(
        `${URL}/api/questions/${id}/answers`,
        {
          contents: markdownValue,
        },
        {
          headers: {
            Authorization: localStorage.getItem('accesstoken'),
          },
        }
      )
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          location.reload();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Header>Your Answer</Header>
      <Editor
        ref={editorRef}
        height="283.5px"
        value=""
        initialEditType="markdown"
        useCommandShortcut={true}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        toolbarItems={[
          ['heading', 'bold', 'italic'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task'],
          ['image', 'link'],
          ['code'],
          ['scrollSync'],
        ]}
        autofocus={false}
      ></Editor>
      {isLogin() || (
        <NeedLogin>
          <h3>
            <Link to={'/signup'}>{'Sign up'}</Link>
            {` or `}
            <Link to={'/login'}>{'log in'}</Link>
          </h3>
        </NeedLogin>
      )}
      <ButtonContainer>
        <PostAnswerButton handlePostAnswer={handlePostAnswer} />
      </ButtonContainer>
    </Container>
  );
}

export default WriteAnswer;
