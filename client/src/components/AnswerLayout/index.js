import Answers from './Answers';
import { Container, Count, Header } from './style';
import WriteAnswer from './WriteAnswer';

function AnswerLayout({ answers, questionId }) {
  return (
    answers && (
      <Container>
        <Header>
          <Count>{`${2} Answers`}</Count>
        </Header>
        <Answers answers={answers} questionId={questionId} />
        <WriteAnswer />
      </Container>
    )
  );
}

export default AnswerLayout;

// import './style.css';

//   const editorDataButton = () => {
//     const markdownValue = editorRef.current?.getInstance().getMarkdown();
//     console.log(markdownValue);
//   };

//   return (
//     <div>
//       <Editor
//         ref={editorRef}
//         height="400px"
//         initialValue=" "
//         initialEditType="markdown"
//         // hideModeSwitch={true}
//         useCommandShortcut={true}
//         plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
//         toolbarItems={[
//           // 툴바 옵션 설정
//           ['heading', 'bold', 'italic'],
//           ['hr', 'quote'],
//           ['ul', 'ol', 'task'],
//           ['image', 'link'],
//           ['code'],
//           ['scrollSync'],
//         ]}
//       ></Editor>
//       <button onClick={editorDataButton}>Next</button>
//     </div>
//   );
// };
