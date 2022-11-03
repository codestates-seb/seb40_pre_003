// -------- QuestionsList ---------
// 화면 중앙에 배치될 질문목록전체 모음

import Question from '../Question';

const QuestionsList = ({ homeData }) => {
  console.log('QuestionList컴포->homeData :', homeData);
  return (
    <div>
      {homeData &&
        homeData.questions.map((el) => (
          <Question key={el.questionId} list={el} />
        ))}
    </div>
  );
};

export default QuestionsList;
