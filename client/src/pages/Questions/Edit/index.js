import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import { useRef } from 'react';
import { HiPencil } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Container,
  H2,
  Header,
  IconContainer,
  InputTitleDiv,
  Item,
  Li,
  Main,
  Side,
  TagDiv,
  Text,
  ToastDiv,
} from './style';

function Edit() {
  const question = useSelector((state) => state.question);
  console.log('question in Edit', question);
  let { id, answerid } = useParams();
  console.log('useParams - id in Edit', id);
  console.log('useParams - answerid in Edit', answerid);
  const titleInputValue = useRef();
  const editorRef = useRef();
  const tagInputValue = useRef();
  //   const outputTitle = () => {
  //     console.log(titleInputValue.current.value);
  //   };
  //   const outputTag = () => {
  //     console.log(tagInputValue.current.value);
  //   };

  let title, body;

  if (question && answerid) {
    body = question.answers.find((el) => el.answerid === answerid).contents;
  } else if (question) {
    title = question.title;
    body = question.body;
  }

  const handleEdit = () => {
    let newTitle = titleInputValue.current.value;
    let newBody = editorRef.current?.getInstance().getMarkdown();
    // let newTags;

    if (answerid) {
      axios
        .patch(`/api/questions/${id}/answers/${answerid}`, {
          contents: newBody,
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    } else {
      axios
        .patch(`/api/questions/${id}`, {
          title: newTitle,
          body: newBody,
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    }
  };

  return (
    <Container>
      <Main>
        <InputTitleDiv>
          <div>
            <H2>Title</H2>
          </div>
          <input
            type="text"
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            ref={titleInputValue}
            value={title ? title : ''}
          />
          {/* <button onClick={outputTitle}>Next</button> */}
        </InputTitleDiv>
        <ToastDiv>
          <div>
            <H2>Body</H2>
          </div>
          {/* <ToastEditor isEdit={true} value={body ? body : ''}></ToastEditor> */}
          <Editor
            ref={editorRef}
            height="400px"
            initialValue={body}
            initialEditType="markdown"
            // hideModeSwitch={true}
            useCommandShortcut={true}
            //   plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
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
        </ToastDiv>
        <TagDiv>
          <div>
            <H2>Tags</H2>
          </div>
          <input
            type="text"
            placeholder="e.g (excel string regex)"
            ref={tagInputValue}
          />
          {/* <button onClick={outputTag}>Next</button> */}
        </TagDiv>
        <button onClick={handleEdit}>Submit Edits</button>
      </Main>
      <Side>
        <Header>The Overflow Blog</Header>
        <Item>
          <Li>
            <IconContainer>
              <HiPencil size="14px" />
            </IconContainer>
            <Text>
              Introducing the Ask Wizard: Your guide to crafting high-quality
              questions
            </Text>
          </Li>
          <Li>
            <IconContainer>
              <HiPencil size="14px" />
            </IconContainer>
            <Text>
              How to get more engineers entangled with quantum computing (Ep.
              501)
            </Text>
          </Li>
        </Item>
        <Header>Featured on Meta</Header>
        <Item className="last">
          <Li>
            <IconContainer>
              <HiPencil size="14px" />
            </IconContainer>
            <Text>The 2022 Community-a-thon has begun!</Text>
          </Li>
          <Li>
            <IconContainer>
              <HiPencil size="14px" />
            </IconContainer>
            <Text>Mobile app infrastructure being decommissioned</Text>
          </Li>
          <Li>
            <IconContainer>
              <HiPencil size="14px" />
            </IconContainer>
            <Text>Staging Ground Workflow: Canned Comments</Text>
          </Li>
          <Li>
            <IconContainer>
              <HiPencil size="14px" />
            </IconContainer>
            <Text>The Ask Wizard (2022) has graduated</Text>
          </Li>
        </Item>
      </Side>
    </Container>
  );
}

export default Edit;
