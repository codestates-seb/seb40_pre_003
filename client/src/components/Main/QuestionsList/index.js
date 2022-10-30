// -------- QuestionsList ---------
// 화면 중앙에 배치될 질문목록전체 모음

import { DummyData } from '../Data/DummyData';
import Question from '../Question';

const QuestionsList = () => {
  console.log(DummyData);
  return (
    <div>
      {DummyData.map((el) => (
        <Question key={el.id} list={el} />
      ))}
    </div>
  );
};

export default QuestionsList;
