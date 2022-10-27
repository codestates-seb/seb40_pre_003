// import styled from 'styled-components';

// import dummyList from '../db/dummy';
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
