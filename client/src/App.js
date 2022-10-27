// import GlobalNav from './components/Layout/GlobalNav';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './assets/GlobalStyle';
import Footer from './components/Layout/Footer';
import GlobalNav from './components/Layout/GlobalNav';
import SideNav from './components/Layout/SideNav';
import Home from './components/Main/Home';
import Login from './pages/Register/Login';
import Signup from './pages/Register/Signup';

function App() {
  const { pathname } = useLocation();

  const noSnb = ['/ask', '/login', '/logout', '/signup'];
  const noFooter = ['/login', '/logout', '/signup'];

  const hideSnb = noSnb.includes(pathname);
  const hideFooter = noFooter.includes(pathname);
  return (
    <>
      <GlobalStyle />
      <GlobalNav />
      <Body>
        {hideSnb || <SideNav />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/questions" element={<div>questions</div>} />
          <Route path="/questions/ask" element={<div>ask</div>} />
          <Route path={`/questions/:id`} element={<div>questions/:id</div>} />
          {/* querystring으로 검색 결과 페이지 이동 (/search?q=springboot) */}
          <Route path="/search" element={<div>search result</div>} />
          <Route path="/tags" element={<div>tags</div>} />
          <Route path="/users" element={<div>users</div>} />
          {/* id가 본인이면 마이페이지 */}
          <Route path={`/users/:id`} element={<div>users/:id</div>} />
        </Routes>
      </Body>
      {hideFooter || <Footer />}
    </>
  );
}

const Body = styled.div`
  display: flex;
  margin: 0 124px;
  padding-top: 50px;
  width: 100%;
  height: 100%;
`;

export default App;
