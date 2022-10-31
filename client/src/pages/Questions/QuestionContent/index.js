// import AskQuestionButton from '../../../components/Buttons/AskQuestionButton';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnswerLayout from '../../../components/AnswerLayout';
import ContentLayout from '../../../components/ContentLayout';
import QuestionHeader from '../../../components/QuestionHeader';
import SideBarWidget from '../../../components/SideBarWidget';
// import useAxios from '../../../util/useAxios';
import { Container, MainBar, QuestionBody, SideBar } from './style';

function QuestionContent() {
  // const testdata = {
  //   title: 'Event click button cannot direct to another page',
  //   body: `## Hi guys i'm a newbie in javascript so i testing a event handler so this is my code:

  //   \`\`\`js
  //   let btn = document.getElementById('button');
  //   btn.addEventListener('click', () => {
  //     window.location.href = 'https://www.youtube.com';
  //   });
  //   \`\`\`

  //   when i click the button it's nothing happen. Why the code didn't work? can anyone help me how to fix it?
  //   `,
  //   createdAt: '2022-10-26T16:00:07.131Z',
  //   modifiedAt: '2022-10-26T16:00:07.131Z',
  //   score: 26,
  //   views: 149,
  //   // answers: 2, // 이름 겹침
  //   tags: ['react', 'js', 'html'],
  //   user: {
  //     displayName: 'jeje',
  //     // image
  //   },
  //   // pageInfo: {} // 상세 페이지에서 필요한지?
  //   answers: [
  //     {
  //       body: `So you should set the Width of the column to the ActualWidth of MainInfo, for example using a binding. Or programmatically. Either way, you have to set it one way or another.`,
  //       score: 12,
  //       displayName: 'jaypark',
  //       // image
  //     },
  //     {
  //       body: `Well, you need to define the width contraint somehow. Auto effectively means that the column will grow along with the widest element in it, i.e. the "minor" information TextBlock in this case.`,
  //       score: 3,
  //       displayName: 'kiki',
  //       // image
  //     },
  //   ],
  // };

  // const [testdata, error] = useAxios('/questions/1');
  // console.log('testdata', testdata);
  // console.log('error', error);

  let { id } = useParams();
  // console.log('params', id);

  const [testdata, setTestdata] = useState(null);
  useEffect(() => {
    axios
      .get(`/questions/${id}`)
      .then((res) => {
        console.log('res', res);
        return res.data;
      })
      .then((data) => setTestdata(data))
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
            <ContentLayout questionId={testdata.id} testdata={testdata} />
            {testdata.answers && (
              <AnswerLayout
                answers={testdata.answers}
                questionId={testdata.id}
              />
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
