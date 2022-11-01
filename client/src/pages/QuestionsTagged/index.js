import styled from 'styled-components';
import { Link } from 'react-router-dom';
import QuestionsList from '../../components/Main/QuestionsList';
import { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionsTaggedHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 20px;
`;

// 제목
const QuestionsTaggedTitle = styled.span`
  font-size: 27px;
  margin-top: 19.5px;
`;

// 질문작성 버튼
const AskQuestionButton = styled(Link)`
  text-align: center;
  position: relative;
  display: inline-block;
  padding: 0.8em;
  background-color: #0995ff;
  font-size: 12.9px;
  font-family: inherit;
  font-weight: normal;
  color: white;
  width: 103px;
  height: 37px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  outline: none;
  margin-top: 19.5px;
  text-decoration-line: none;
  cursor: pointer;
`;

// 타이틀 아래 tag에 대한 기본 설명 텍스트
const AboutTag = styled.p`
  font-size: 12px;
  color: #6a737c;
  margin-bottom: 10px;
`;

// 질문 갯수
const Total = styled.div`
  margin: 20px 0 27px 23px;
  font-size: 20px;
`;

// tagDescription(String)(태그 설명 or null)

const QuestionsTagged = () => {
  const [tagData, setTagData] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    axios
      .get(`/api/questions`, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'ngrok-skip-browser-warning': '111',
        },
      })
      .then((res) => {
        console.log('QuestionsTagged의 Data : ', res.data.questions);
        setTagData(res.data.questions);
        setTotalCount(res.data.questions.length);
      })
      .catch((error) => console.log(`error : `, error));
  }, []);

  return (
    <div>
      <div>
        <QuestionsTaggedHead>
          <QuestionsTaggedTitle>Questions tagged [java]</QuestionsTaggedTitle>
          <AskQuestionButton>Ask Question</AskQuestionButton>
        </QuestionsTaggedHead>
      </div>
      <div>
        <AboutTag>
          Java is a high-level object-oriented programming language. Use this
          tag when you`re having problems using or understanding the language
          itself. This tag is frequently used alongside other tags for libraries
          and/or frameworks used by Java developers.
        </AboutTag>
        <Total>{totalCount} questions</Total>
      </div>
      <QuestionsList homeData={tagData}></QuestionsList>
    </div>
  );
};

export default QuestionsTagged;
