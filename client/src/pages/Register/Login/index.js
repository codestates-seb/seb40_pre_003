import { useState } from 'react';
//import { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { SiGithub } from 'react-icons/si';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LoginBlock } from './style';

import axios from 'axios';
import { loginAction } from '../../../redux';
const url = process.env.REACT_APP_API_URL;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidMsg, setEmailValidMsg] = useState('');
  const [loginFailMsg, setLoginFailMsg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(dispatch(loginAction('테스트')));
    console.log('이즈로그인??', isLogin);

    if (email.length === 0) {
      setEmailValidMsg('Email cannot be empty.');
      return;
    } else if (!(email.includes('@') && email.includes('.'))) {
      console.log('이메일 유효성검사: @랑 .이 없음');
      setEmailValidMsg('The email is not a valid email address.');
      return;
    }

    const loginData = {
      email: email,
      password: password,
    };
    const loginConfig = {
      withCredentials: true,
    };

    axios
      .post(`${url}/api/auth/login`, loginData, loginConfig)
      .then((res) => {
        console.log('로그인 성공');
        console.log('로그인 시 들어오는 정보', res);

        let accessToken = res.headers.accesstoken;
        let userId = res.headers.id;
        let displayName = res.headers.displayname;

        localStorage.setItem('accesstoken', accessToken);
        localStorage.setItem('id', userId);
        localStorage.setItem('displayname', displayName);

        console.log(localStorage);

        dispatch(loginAction(userId));
        console.log('로그인액션전달', dispatch(loginAction(userId)));
        navigate('/');
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.log('에러인건가', error);
        if (error.message) {
          setLoginFailMsg('The email or password is incorrect.');
          location.reload();
          setEmail('');
          setPassword('');
        }
      });
  };

  const onClick = () => {
    window.location.assign(url);

    let googleAccessToken = new URL(location.href).searchParams.get(
      'access_token'
    );
    let googleRefreshToken = new URL(location.href).searchParams.get(
      'refresh_token'
    );
    console.log('구글액세스토큰', googleAccessToken);
    console.log('구글리프레시토큰', googleRefreshToken);
    if (googleAccessToken !== null) {
      localStorage.setItem('googleAccessToken', googleAccessToken);
      localStorage.setItem('googleRefreshToken', googleRefreshToken);
      navigate('/');
    }
  };

  return (
    <LoginBlock className="login_block">
      <div>
        <img
          src="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon@2.png?v=73d79a89bded"
          alt="logo img"
        />
      </div>

      {/* 소셜 로그인 */}
      <section className="social_login">
        <div>
          <button onClick={onClick}>
            <FcGoogle className="icons" size={22} />
            Log in with Google
          </button>

          <button id="github_login">
            <SiGithub className="icons" size={22} />
            Log in with Github
          </button>
          <button id="facebook_login">
            <GrFacebook className="icons" size={20} />
            Log in with Facebook
          </button>
        </div>
      </section>
      <section className="email_login">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor={'Email'}>Email</label>
            <input
              type="email"
              htmlFor={'Email'}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {emailValidMsg ? <div className="msg">{emailValidMsg}</div> : ''}
          </div>
          <div>
            <label htmlFor={'Password'}>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              htmlFor="Password"
              autoComplete="on"
            ></input>
            {loginFailMsg ? <div className="msg">{loginFailMsg}</div> : ''}
          </div>
          <button className="login_btn">Log in</button>
        </form>
      </section>
      <div className="login_guide">
        <div>
          Don&apos;t have an account? <Link to="/signup">Sign up</Link>
        </div>
        <br></br>
        <div>
          Are you an employer?
          <a href="https://talent.stackoverflow.com/users/login">
            Sign up on Talent
          </a>
        </div>
      </div>
    </LoginBlock>
  );
}
