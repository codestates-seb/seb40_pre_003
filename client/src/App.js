import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import GlobalNav from './components/Layout/GlobalNav';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <GlobalNav /> */}
        <Routes>
          <Route path="/" element={<div>home</div>} />
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
      </BrowserRouter>
    </>
  );
}

export default App;
