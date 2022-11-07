// import AskQuestionButton from '../../../components/Buttons/AskQuestionButton';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import AnswerLayout from '../../../components/AnswerLayout';
import ContentLayout from '../../../components/ContentLayout';
import QuestionHeader from '../../../components/QuestionHeader';
import SideBarWidget from '../../../components/SideBarWidget';
import { questionAction } from '../../../redux';
// import useAxios from '../../../util/useAxios';
import { Container, MainBar, QuestionBody, SideBar } from './style';
const URL = process.env.REACT_APP_API_URL;

function QuestionContent() {
  const dispatch = useDispatch();
  let { id } = useParams();

  const [testdata, setTestdata] = useState(null);
  useEffect(() => {
    axios
      .get(`${URL}/api/questions/${id}`, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      })
      .then((res) => {
        console.log('questions res', res);
        return res.data;
      })
      .then((data) => {
        setTestdata(data);
        dispatch(questionAction(data));
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return (
    testdata && (
      <Container>
        <QuestionHeader testdata={testdata} />
        <QuestionBody>
          <MainBar>
            <ContentLayout questionId={id} testdata={testdata} />
            {testdata.answers && (
              <AnswerLayout answers={testdata.answers} questionId={id} />
            )}
          </MainBar>
          <SideBar>
            <SideBarWidget />
          </SideBar>
        </QuestionBody>
      </Container>
    )
  );
}

export default QuestionContent;
