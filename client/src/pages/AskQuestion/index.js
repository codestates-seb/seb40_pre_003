// -------------- AskQuestion -------------
// 화면에있는 Ask Question 버튼을 눌렀을때 나오는 페이지 -> 질문 작성 페이지

// import styled from 'styled-components';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
// import TitleEditor from '../../components/TitleEditor';
import ToastEditor from './ToastEditor';
import {
  AskQuestionDiv,
  AskQuestionHead,
  AskQuestionHeadText,
  BackGroundImg,
  GoodInfoDiv,
  GoodQuestionInfo,
  GoodTitleInfo,
  GoodTitleHead,
  GoodTitleInfoText,
  InputTitleDiv,
  ToastDiv,
  TagDiv,
} from './style';
import { useRef } from 'react';

const AskQuestion = () => {
  const titleInputValue = useRef();
  const tagInputValue = useRef();

  const outputTitle = () => {
    console.log(titleInputValue.current.value);
  };

  const outputTag = () => {
    console.log(tagInputValue.current.value);
  };

  return (
    <AskQuestionDiv>
      <AskQuestionHead>
        <AskQuestionHeadText>Ask a public question</AskQuestionHeadText>
        <BackGroundImg></BackGroundImg>
      </AskQuestionHead>
      <GoodInfoDiv>
        <GoodQuestionInfo>
          <h2>Writing a good question</h2>
          <p>
            You’re ready to <span>ask</span> a{' '}
            <span>programming-related question</span> and this form will help
            guide you through the process.
          </p>
          <p>
            Looking to ask a non-programming question? See{' '}
            <span>the topics here</span> to find a relevant site.
          </p>
          <h5>Steps</h5>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>
            Add “tags” which help surface your question to members of the
            community.
          </li>
          <li>Review your question and post it to the site.</li>
        </GoodQuestionInfo>
        <GoodTitleInfo>
          <GoodTitleHead>Writing a good title</GoodTitleHead>
          <GoodTitleInfoText>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="fontImg-pen"
            ></FontAwesomeIcon>
            <div>
              <p>Your title should summarize the problem.</p>
              <p>
                You might find that you have a better idea of your title after
                writing out the rest of the question.
              </p>
            </div>
          </GoodTitleInfoText>
        </GoodTitleInfo>
      </GoodInfoDiv>
      <InputTitleDiv>
        <div>
          <div>Title</div>
          <p>
            Be specific and imagine you’re asking a question to another person.
          </p>
        </div>
        <input
          type="text"
          placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
          ref={titleInputValue}
        />
        <button onClick={outputTitle}>Next</button>
      </InputTitleDiv>
      <ToastDiv>
        <div>
          <div>What are the details of your problem?</div>
          <p>
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </p>
        </div>
        <ToastEditor></ToastEditor>
      </ToastDiv>
      <TagDiv>
        <div>
          <div>Tags</div>
          <p>
            Add up to 5 tags to describe what your question is about. Start
            typing to see suggestions.
          </p>
        </div>
        <input
          type="text"
          placeholder="e.g (excel string regex)"
          ref={tagInputValue}
        />
        <button onClick={outputTag}>Next</button>
      </TagDiv>
      <button>Submit your question</button>
    </AskQuestionDiv>
  );
};

export default AskQuestion;
