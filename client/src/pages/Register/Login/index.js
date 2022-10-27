import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { SiGithub } from 'react-icons/si';
//import { Link } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { LoginBlock } from './style';

import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidMsg, setEmailValidMsg] = useState('');
  //The email is not a valid email address.
  const [loginFailMsg, setLoginFailMsg] = useState('');
  //The email or password is incorrect.
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.length === 0) {
      setEmailValidMsg('Email cannot be empty.');
      return;
    } else if (!(email.includes('@') && email.includes('.'))) {
      console.log('이메일 유효성검사: @랑 .이 없음');
      setEmailValidMsg('The email is not a valid email address.');
      return;
    }

    axios
      .post(`/auth/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log('로그인 성공');
        console.log('res: ', res);
        let accessToken = res.headers.accesstoken;
        let userId = res.headers.id;
        //로컬 스토리지에 키와 값을 텍스트형식으로 담는다
        localStorage.setItem('accesstoken', accessToken);
        localStorage.setItem('id', userId);
        console.log(localStorage);
        //dispatch(loginAction(userId))
        navigate('/');
        //홈으로 이동
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.log('에러인건가', error);
        if (error.message === 'Request failed with status code 401') {
          setLoginFailMsg('The email or password is incorrect.');
          setEmail(''); //왜 초기화가 안되지??아...리렌더링 시켜야하는데
          setPassword('');
        }
      });
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
          <button>
            <FcGoogle className="icons" size={22} />
            Log in with Google
          </button>
          <button>
            <SiGithub className="icons" size={22} />
            Log in with Github
          </button>
          <button>
            <GrFacebook className="icons" size={20} />
            Log in with Facebook
          </button>
        </div>
      </section>
      {/* 이메일 로그인 */}
      <section className="email_login">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor={'Email'}>Email</label>
            <input
              type="text"
              name="email"
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
              htmlFor={'Password'}
            ></input>
            {loginFailMsg ? <div className="msg">{loginFailMsg}</div> : ''}
          </div>
          <button className="login_btn">Log in</button>
        </form>
      </section>
      <div className="login_guide">
        <div>
          Don&apos;t have an account? <Link to="/">Sign up</Link>
        </div>
        <br></br>
        <div>
          Are you an employer? <Link to="/">Sign up on Talent</Link>
        </div>
      </div>
    </LoginBlock>
  );
}
