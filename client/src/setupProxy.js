const { createProxyMiddleware } = require('http-proxy-middleware');
const URL = env.REACT_APP_API_URL;

module.exports = function (app) {
  app.use(
    // ['/api/auth/login', '/api/users', '/api/questions/:id', '/api'], //proxy가 필요한 path prameter를 입력합니다.
    ['/api'], //proxy가 필요한 path prameter를 입력합니다.
    createProxyMiddleware({
      target: URL, //타겟이 되는 api url를 입력합니다.
      changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
    })
  );
};
