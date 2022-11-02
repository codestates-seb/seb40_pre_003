import Prism from 'prismjs';
import { useRef } from 'react';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import { useDispatch } from 'react-redux';
import 'tui-color-picker/dist/tui-color-picker.css';
import { askBodyAction } from '../../redux';
import './style.css';

const ToastEditor = ({ isEdit = false, value }) => {
  const dispatch = useDispatch();
  const editorRef = useRef();
  // const [body, setBody] = useState(isEdit ? value : '');

  const editorDataButton = () => {
    const markdownValue = editorRef.current?.getInstance().getMarkdown();
    console.log(markdownValue);
  };

  const onChangeBody = () => {
    dispatch(askBodyAction(editorRef.current?.getInstance().getMarkdown()));
    // setBody(editorRef.current?.getInstance().getMarkdown());
    // console.log(body);
  };

  return (
    <div>
      <Editor
        ref={editorRef}
        height="400px"
        initialValue={isEdit ? value : ''}
        // value={body}
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
        onChange={onChangeBody}
        autofocus={false}
      ></Editor>
      {isEdit || <button onClick={editorDataButton}>Next</button>}
    </div>
  );
};

export default ToastEditor;
