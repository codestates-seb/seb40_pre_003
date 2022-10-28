// import GlobalNav from './components/Layout/GlobalNav';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './assets/GlobalStyle';
import Footer from './components/Layout/Footer';
import GlobalNav from './components/Layout/GlobalNav';
import SideNav from './components/Layout/SideNav';
import Home from './components/Main/Home';
import QuestionContent from './pages/Questions/QuestionContent';
import Login from './pages/Register/Login';
import Logout from './pages/Register/Logout';
import Signup from './pages/Register/Signup';

function App() {
  const { pathname } = useLocation();
  // background-color
  // login, signup: --black-050, ask: --black-025, 나머지: white
  let bgColor;
  if (pathname === '/login' || pathname === '/signup') {
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
          <Route path="/questions" element={<div>questions</div>} />
          <Route path="/questions/ask" element={<div>ask</div>} />
          <Route path={`/questions/:id`} element={<QuestionContent />} />
          {/* querystring으로 검색 결과 페이지 이동 (/search?q=springboot) */}
          <Route path="/search" element={<div>search result</div>} />
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
