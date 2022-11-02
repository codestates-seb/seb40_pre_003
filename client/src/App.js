// import GlobalNav from './components/Layout/GlobalNav';
import { Route, Routes, useLocation } from 'react-router-dom'; // Link 잠시 지움
import styled from 'styled-components';
import GlobalStyle from './assets/GlobalStyle';
import Footer from './components/Layout/Footer';
import GlobalNav from './components/Layout/GlobalNav';
import SideNav from './components/Layout/SideNav';
import AskQuestion from './pages/AskQuestion/index';
import Home from './pages/Home'; // 잠시 주석처리
import Edit from './pages/Questions/Edit';
import QuestionContent from './pages/Questions/QuestionContent';
import Logout from './pages/Register/Logout';
import SearchResults from './pages/SearchResults';

import AllQuestions from './pages/AllQuestions';
import Login from './pages/Register/Login';
import Signup from './pages/Register/Signup';

function App() {
  const { pathname } = useLocation();

  // background-color
  // login, signup: --black-050, ask: --black-025, 나머지: white
  let bgColor;
  if (
    pathname === '/login' ||
    pathname === '/signup' ||
    pathname === '/logout'
  ) {
    bgColor = `var(--black-050)`;
  } else if (pathname === '/ask') {
    bgColor = `var(--black-025)`;
  } else {
    bgColor = `white`;
  }

  const noSnb = ['/ask', '/login', '/logout', '/signup'];
  const noFooter = ['/login', '/logout', '/signup'];

  const hideSnb = noSnb.includes(pathname);
  const hideFooter = noFooter.includes(pathname);
  return (
    <Root color={bgColor}>
      <GlobalStyle />
      <GlobalNav />
      <Body>
        {hideSnb || <SideNav />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/questions"
            // element={<Link to="/questions/1">questions</Link>}
            element={<AllQuestions />}
          />
          <Route path="/questions/ask" element={<AskQuestion />} />
          <Route path={`/questions/:id`} element={<QuestionContent />} />
          <Route path={`/questions/edit/:id`} element={<Edit />} />
          <Route path={`/questions/edit/:id/:answerid`} element={<Edit />} />
          {/* querystring으로 검색 결과 페이지 이동 (/search?q=springboot) */}
          <Route path="/search" element={<SearchResults />} />
          <Route path="/tags" element={<div>tags</div>} />
          <Route path="/users" element={<div>users</div>} />
          {/* id가 본인이면 마이페이지 */}
          <Route path={`/users/:id`} element={<div>users/:id</div>} />
        </Routes>
      </Body>
      {hideFooter || <Footer />}
    </Root>
  );
}
const Root = styled.section`
  background-color: ${(props) => props.color};
`;

const Body = styled.div`
  display: flex;
  margin: 0 124px;
  padding-top: 50px;
`;

export default App;
