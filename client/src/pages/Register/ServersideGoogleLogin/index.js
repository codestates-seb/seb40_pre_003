import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { loginAction } from '../../../redux';

//const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
//내아이디
const clientId =
  '1037041682371-ht3h9ic8p826d3s9313oifff3drthjj4.apps.googleusercontent.com';
//기홍님 아이디
// const clientId =
//   '948722864071 - nqo3i01477pvm3ouripnkdv4pntirbgr.apps.googleusercontent.com';

const ServersideGoogleLogin = () => {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selec = useSelector((state) => state.loginReducer);

  const onSuccess = (res) => {
    console.log('성공:', res);
    let googleAceessToken = res.accesstoken;
    //var accessToken = gapi.auth.getToken().access_token;
    localStorage.setItem('googleAceessToken', googleAceessToken);
    dispatch(loginAction('333'));
    //useSelertor로 로그인상태로 바꿔주어야 하나??
    console.log('유즈셀렉터', selec);
    alert('google 로그인을 환영합니다!');
    navigate('/'); //홈으로 보내야함
  };
  const onFailure = (err) => {
    console.log('실패:', err);
  };
  return (
    <StyledContainer>
      <GoogleLogin
        className="btn"
        clientId={clientId}
        buttonText="구글로그인제발"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        //isSignedIn={true} //버튼클릭 없이 자동 로그인
      />
    </StyledContainer>
  );
};
export default ServersideGoogleLogin;

const StyledContainer = styled.div`
  .btn {
    height: 42px;
    width: 314px;
    margin: 4px;
    border: 1px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center; //수직으로 가운데
    justify-content: center; //수평으로 가운데
  }
`;
