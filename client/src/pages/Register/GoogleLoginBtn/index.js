import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';

const GoogleLoginBtn = () => {
  //내아이디
  const clientId =
    '1037041682371-ht3h9ic8p826d3s9313oifff3drthjj4.apps.googleusercontent.com';
  // const clientId =
  //   "948722864071-nqo3i01477pvm3ouripnkdv4pntirbgr.apps.googleusercontent.com";

  const handleCallbackResponse = (res) => {
    console.log(res.credential);
    const decode = jwt_decode(res.credential);
    console.log(decode);
  };

  // useScript("https://accounts.google.com/gsi/client");
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse,
    });
    window.google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {
        theme: 'outline',
        size: 'large',
        width: '314',
        height: '38',
        //type: "icon",
        //shape: "circle",
      }
    );
  }, []);

  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  );
};

export default GoogleLoginBtn;
