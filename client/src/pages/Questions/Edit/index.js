import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import { useRef, useState } from 'react';
import { HiPencil } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import TagInput from '../../../components/TagInput';

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
  TagContainer,
  Text,
  ToastDiv,
} from './style';
const URL = process.env.REACT_APP_API_URL;

function Edit() {
  const navigate = useNavigate();
  const question = useSelector((state) => state.questionReducer.question);
  let { id, answerid } = useParams();
  let isAnswer = answerid === undefined ? false : true;
  console.log('useParams - id in Edit', id);
  console.log('useParams - answerid in Edit', answerid);
  const titleInputValue = useRef();
  const editorRef = useRef();
  let title, body;

  if (question && answerid) {
    body = question.answers.find((el) => el.answerId === +answerid).contents;
  } else if (question) {
    title = question.title;
    body = question.body;
  }

  const [titleValue, setTitleValue] = useState(title ? title : '');
  let newTags = useSelector((state) => state.askReducer.tags);
  console.log('newTags in Edit:', newTags);

  function handleEdit() {
    let newBody = editorRef.current?.getInstance().getMarkdown();
    let uri, reqBody;

    if (answerid) {
      uri = `${URL}/api/questions/${id}/answers/${answerid}`;
      reqBody = {
        contents: newBody,
      };
    } else {
      let newTitle = titleInputValue.current.value;
      uri = `${URL}/api/questions/${id}`;
      reqBody = {
        title: newTitle,
        body: newBody,
        tags: newTags,
      };
    }

    axios
      .patch(uri, reqBody, {
        headers: {
          Authorization: localStorage.getItem('accesstoken'),
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status >= 200 && res.status < 300) {
          navigate(`/questions/${id}`);
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <Container>
      <Main>
        {!isAnswer && (
          <InputTitleDiv>
            <div>
              <H2>Title</H2>
            </div>
            <input
              type="text"
              placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              ref={titleInputValue}
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
            />
          </InputTitleDiv>
        )}
        <ToastDiv>
          <div>
            <H2>Body</H2>
          </div>
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
            autofocus={false}
          ></Editor>
        </ToastDiv>
        {/* <TagDiv> */}
        {!isAnswer && (
          <TagContainer>
            <div>
              <H2>Tags</H2>
            </div>
            {/* <input
            type="text"
            placeholder="e.g (excel string regex)"
            ref={tagInputValue}
          /> */}
            <TagInput initialTags={question.tags} />
          </TagContainer>
        )}
        {/* </TagDiv> */}
        <button onClick={handleEdit}>Submit Edits</button>
      </Main>
      <Side>
        <Header>How to Edit</Header>
        <Item>
          <Li>
            <IconContainer>
              <HiPencil size="14px" />
            </IconContainer>
            <Text>Correct minor typos or mistakes</Text>
          </Li>
          <Li>
            <IconContainer>
              <HiPencil size="14px" />
            </IconContainer>
            <Text>Clarify meaning without changing it</Text>
          </Li>
          <Li>
            <IconContainer>
              <HiPencil size="14px" />
            </IconContainer>
            <Text>Add related resources or links</Text>
          </Li>
          <Li>
            <IconContainer>
              <HiPencil size="14px" />
            </IconContainer>
            <Text>Always respect the author’s intent</Text>
          </Li>
          <Li>
            <IconContainer>
              <HiPencil size="14px" />
            </IconContainer>
            <Text>Don’t use edits to reply to the author</Text>
          </Li>
        </Item>
      </Side>
    </Container>
  );
}

export default Edit;
