import { gapi } from 'gapi-script';
import { useEffect } from 'react';

const clientId = '받아온 클라이언트 아이디';

//수정용

useEffect(() => {
  const initClient = () => {
    gapi.client.init({
      clientId: clientId,
      scope: '',
    });
  };
  gapi.load('client:auth2', initClient);
});

const GoogleLogin = () => {
  const onSuccess = (res) => {
    console.log('success:', res);
  };
  const onFailure = (err) => {
    console.log('failed:', err);
  };
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  );
};

export default GoogleLogin;
