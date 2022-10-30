import { useRef } from 'react';
import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import './style.css';

const ToastEditor = () => {
  const editorRef = useRef();

  const editorDataButton = () => {
    const markdownValue = editorRef.current?.getInstance().getMarkdown();
    console.log(markdownValue);
  };

  return (
    <div>
      <Editor
        ref={editorRef}
        height="400px"
        initialValue=" "
        initialEditType="markdown"
        // hideModeSwitch={true}
        useCommandShortcut={true}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        toolbarItems={[
          // 툴바 옵션 설정
          ['heading', 'bold', 'italic'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task'],
          ['image', 'link'],
          ['code'],
          ['scrollSync'],
        ]}
      ></Editor>
      <button onClick={editorDataButton}>Next</button>
    </div>
  );
};

export default ToastEditor;
