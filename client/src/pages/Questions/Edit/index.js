import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import { useRef, useState } from 'react';
import { HiPencil } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

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
  const navigate = useNavigate();
  const question = useSelector((state) => state.questionReducer.question);
  let { id, answerid } = useParams();
  let isAnswer = answerid === undefined ? false : true;
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
    // body = question.answers.find((el) => el.answerid === answerid).contents;
    // console.log(question.answers.filter((el) => el.answerId === +answerid)[0]);
    body = question.answers.find((el) => el.answerId === +answerid).contents;
  } else if (question) {
    title = question.title;
    body = question.body;
  }

  const [titleValue, setTitleValue] = useState(title ? title : '');

  const handleEdit = () => {
    let newBody = editorRef.current?.getInstance().getMarkdown();
    // let newTags;

    let uri, reqBody;

    if (answerid) {
      uri = `/api/questions/${id}/answers/${answerid}`;
      reqBody = {
        contents: newBody,
      };
    } else {
      let newTitle = titleInputValue.current.value;
      uri = `/api/questions/${id}`;
      reqBody = {
        title: newTitle,
        body: newBody,
        tags: [],
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

    /*
    if (answerid) {
      axios
        .patch(
          `/api/questions/${id}/answers/${answerid}`,
          {
            contents: newBody,
          },
          {
            headers: {
              Authorization: localStorage.getItem('accesstoken'),
            },
          }
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            navigate(`/questions/${id}`);
          }
        })
        .catch((error) => console.log(error));
    } else {
      let newTitle = titleInputValue.current.value;
      console.log(newTitle, newBody);
      axios
        .patch(
          `/api/questions/${id}`,
          {
            title: newTitle,
            body: newBody,
            tags: [],
          },
          {
            headers: {
              Authorization: localStorage.getItem('accesstoken'),
            },
          }
        )
        .then((res) => {
          console.log(res);
          navigate(`/questions/${id}`);
        })
        .catch((error) => console.log(error));
    }
    */
  };

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
            {/* <button onClick={outputTitle}>Next</button> */}
          </InputTitleDiv>
        )}
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
