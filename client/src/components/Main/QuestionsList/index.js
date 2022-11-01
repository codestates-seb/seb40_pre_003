// -------- QuestionsList ---------
// 화면 중앙에 배치될 질문목록전체 모음

import Question from '../Question';

const QuestionsList = ({ homeData }) => {
  return (
    <div>
      {homeData && homeData.map((el) => <Question key={el.id} list={el} />)}
    </div>
  );
};

export default QuestionsList;
