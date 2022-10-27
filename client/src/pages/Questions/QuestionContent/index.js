import { Container, QuestionHeader, Title } from './style';

function QuestionContent() {
  const testdata = {
    title: 'Event click button cannot direct to another page',
    body: `Hi guys i'm a newbie in javascript so i testing a event handler so this is my code:

    let btn = document.getElementById('button')
    btn.addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com'
    })
    when i click the button it's nothing happen. Why the code didn't work? can anyone help me how to fix it?
    `,
    createdAt: '2022-10-26T16:00:07.131Z',
    modifiedAt: '2022-10-26T16:00:07.131Z',
    score: 26,
    views: 149,
    // answers: 2, // 이름 겹침
    user: {
      displayName: 'jeje',
      // image
    },
    // pageInfo: {} // 상세 페이지에서 필요한지?
    answers: [
      {
        body: `So you should set the Width of the column to the ActualWidth of MainInfo, for example using a binding. Or programmatically. Either way, you have to set it one way or another.`,
        score: 12,
        displayName: 'jaypark',
        // image
      },
      {
        body: `Well, you need to define the width contraint somehow. Auto effectively means that the column will grow along with the widest element in it, i.e. the "minor" information TextBlock in this case.`,
        score: 3,
        displayName: 'kiki',
        // image
      },
    ],
  };
  return (
    <Container>
      <QuestionHeader>
        <Title>{testdata.title}</Title>
      </QuestionHeader>
    </Container>
  );
}

export default QuestionContent;
