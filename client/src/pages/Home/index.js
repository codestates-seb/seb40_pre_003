// -----------  Home -----------
// Home || StackOverFlow 로고를 눌렀을때 기본적으로 보이게되는 페이지
// Top Questions(Title) , Ask Question(버튼), QuestionList(질문목록들)

import axios from 'axios';
// import { Link } from 'react';

const Home = () => {
  // const [totalCount, setTotalCount] = useState(DummyData);
  axios
    .get('/api', {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'ngrok-skip-browser-warning': '111',
      },
    })
    .then((res) => console.log(res));

  return <div>테스트중</div>;
};

export default Home;
