import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './assets/GlobalStyle';
import Footer from './components/Layout/Footer';
import GlobalNav from './components/Layout/GlobalNav';
import SideNav from './components/Layout/SideNav';
import Home from './components/Main/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <GlobalNav />
        <Body>
          <SideNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<div>signup</div>} />
            <Route path="/login" element={<div>login</div>} />
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
        <Footer />
      </BrowserRouter>
    </>
  );
}

const Body = styled.div`
  display: flex;
  margin: 0 124px;
`;

export default App;
