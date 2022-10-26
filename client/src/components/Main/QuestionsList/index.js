// import styled from 'styled-components';

import dummyList from '../db/dummy';
import Question from '../Question';

const QuestionsList = () => {
  return (
    <div>
      {dummyList.map((el) => (
        <Question key={el.id} list={el} />
      ))}
    </div>
  );
};

export default QuestionsList;
