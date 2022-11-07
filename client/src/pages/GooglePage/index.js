import { useNavigate } from 'react-router-dom';

const url = process.env.REACT_APP_API_URL;

const GooglePage = () => {
  const navigate = useNavigate();

  window.location.assign(url + `/oauth2/authorization/google`);

  let googleAccessToken = new URL(location.href).searchParams.get(
    'access_token'
  );
  //   let googleRefreshToken = new URL(location.href).searchParams.get(
  //     'refresh_token'
  //   );
  if (googleAccessToken) {
    localStorage.setItem('accesstoken', googleAccessToken);

    setTimeout(() => {
      navigate('/');
    }, 2000);
  }

  return <div>관리자만 들어올 수 있는 페이지</div>;
};

export default GooglePage;
