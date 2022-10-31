import Prism from 'prismjs';
import { useEffect, useRef } from 'react';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PostAnswerButton from '../../Buttons/PostAnswerButton';
import { ButtonContainer, Container, Header } from './style';
// import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
// import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
// import 'tui-color-picker/dist/tui-color-picker.css';

function WriteAnswer() {
  const { id } = useParams();
  let editorRef = useRef();
  useEffect(() => {
    if (editorRef && editorRef.current.blur) editorRef.current.blur();
  }, []);

  const handleFocus = () => {
    // change color
  };

  const handlePostAnswer = () => {
    const markdownValue = editorRef.current.getInstance().getMarkdown();
    console.log(markdownValue);
    axios
      .post(`/api/questions/${id}/answers`, {
        contents: markdownValue,
      })
      .then((res) => console.log(res))
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
        // hideModeSwitch={true}
        useCommandShortcut={true}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        toolbarItems={[
          // 툴바 옵션 설정
          ['heading', 'bold', 'italic'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task'],
          ['image', 'link'],
          ['code'],
          ['scrollSync'],
        ]}
        onFocus={handleFocus}
      ></Editor>
      <ButtonContainer>
        <PostAnswerButton handlePostAnswer={handlePostAnswer} />
      </ButtonContainer>
    </Container>
  );
}

export default WriteAnswer;
