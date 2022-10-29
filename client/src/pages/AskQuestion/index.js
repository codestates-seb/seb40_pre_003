// -------------- AskQuestion -------------
// 화면에있는 Ask Question 버튼을 눌렀을때 나오는 페이지 -> 질문 작성 페이지

import styled from 'styled-components';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';
// import TitleEditor from '../../components/TitleEditor';
import ToastEditor from './ToastEditor';

// AskQuestion 페이지 전체 div
const AskQuestionDiv = styled.div`
  margin-left: 20px;
  margin-bottom: 50px;
`;

// 상단 Ask a public question 헤더문구 + 백그라운드이미지 감쌀 div
const AskQuestionHead = styled.div`
  display: flex;
  width: 1216px;
  height: 130px;
`;
// 헤드 내부->Ask a public question 헤더문구
const AskQuestionHeadText = styled.div`
  text-align: center;
  width: 330px;
  font-size: 27px;
  font-weight: bolder;
  margin-left: -16.5px;
  padding: 40px 30px 30px 0px;
`;
// 헤드내부 -> 헤더문구 옆에 백그라운드이미지
const BackGroundImg = styled.div`
  background-image: url('https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368');
  width: 780px;
  background-repeat: no-repeat;
  background-position: right top;
`;
// 중앙 설명란 감쌀 div
const GoodInfoDiv = styled.div`
  margin-top: 20px;
  /* background-color: white; */
  width: 790px;
  height: 450px;
`;
// 중앙 설명란-> Writing a good question
const GoodQuestionInfo = styled.div`
  background-color: #ebf4fb;
  height: 270px;
  padding: 30px;
  border: 1px solid #a6ceed;
  border-radius: 3px;
  h2 {
    font-size: 21px;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 5px;
    font-size: 15px;
    span {
      color: #0074cc;
    }
  }
  h5 {
    font-size: 15px;
    margin: 20px 0 8px 0;
  }
  li {
    font-size: 13px;
    margin-bottom: 4px;
  }
`;
// 중앙 설명란-> Writing a good title 감쌀 div
const GoodTitleInfo = styled.div`
  margin-top: 30px;
  box-shadow: 2px 2px 2px gray;
  border-radius: 3px;
  border: 1px solid #d6d9dc;
  height: 140px;
`;

// Writing a good title 내부의 상단 Writing a good title 문구 들어갈 부분
const GoodTitleHead = styled.div`
  background-color: #f8f9f9;
  font-size: 16px;
  padding: 13px 0 0 15px;
  border-bottom: 1px solid #d6d9dc;
  height: 50px;
`;

// Writing a good title 내부 하단에 이미지, 설명란 감쌀 div
const GoodTitleInfoText = styled.div`
  display: flex;
  padding: 20px 50px 0px 20px;
  div {
    font-size: 13px;
  }
  p {
    margin: 5px 0 10px 0;
  }
`;

// 제목입력란이란걸 알려주는 문구들과 ,Title 제목을 입력할수 있는 태그를 감싼 div
const InputTitleDiv = styled.div`
  width: 790px;
  margin-top: 30px;
  border-radius: 3px;
  border: 1px solid #d6d9dc;
  height: 208px;
  padding: 35px 0 15px 30px;
  div > div {
    font-size: 15px;
    font-weight: bolder;
    margin-bottom: 8px;
  }
  div > p {
    margin-bottom: 10px;
    font-size: 14px;
    color: #3b4045;
  }
  input {
    width: 730px;
    height: 40px;
    border: 1px solid #babfc4;
    border-radius: 3px;
    padding-left: 8px;
  }
  button {
    margin-top: 8px;
    position: relative;
    display: inline-block;
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
    background-color: #0a95ff;
    color: white;
    padding: 0.8em;
    font-size: 14px;
    outline: none;
    font-weight: normal;
    text-align: center;
    cursor: pointer;
  }
`;

// Toast Editor 감쌀 div
const ToastDiv = styled.div`
  width: 790px;
  margin-top: 30px;
  border-radius: 3px;
  border: 1px solid #d6d9dc;
  height: 580px;
  padding: 35px 35px 15px 30px;
  div > div {
    font-size: 17px;
    font-weight: bolder;
    margin-bottom: 8px;
  }
  div > p {
    color: #3b4045;
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

// Tag -> 문구, 설명, 인풋창 부분 감쌀 div
const TagDiv = styled.div`
  width: 790px;
  margin-top: 30px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: 1px solid #d6d9dc;
  height: 208px;
  padding: 35px 0 15px 30px;
  div > div {
    font-size: 17px;
    font-weight: bolder;
    margin-bottom: 8px;
  }
  div > p {
    color: #3b4045;
    font-size: 14px;
    margin-bottom: 8px;
  }
  input {
    width: 730px;
    height: 40px;
    border: 1px solid #babfc4;
    border-radius: 3px;
    padding-left: 8px;
  }
  button {
    margin-top: 8px;
    position: relative;
    display: inline-block;
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
    background-color: #0a95ff;
    color: white;
    padding: 0.8em;
    font-size: 14px;
    outline: none;
    font-weight: normal;
    text-align: center;
    cursor: pointer;
  }
`;

const AskQuestion = () => {
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
        />
        <button>Next</button>
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
        <input type="text" placeholder="e.g (excel string regex)" />
        <button>Next</button>
      </TagDiv>
      <button>Submit your question</button>
    </AskQuestionDiv>
  );
};

export default AskQuestion;
