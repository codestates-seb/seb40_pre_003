import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { SiGithub } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { LoginBlock } from './style';
//import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidMsg, setEmailValidMsg] = useState('');
  //The email is not a valid email address.
  const [loginFailMsg, setLoginFailMsg] = useState('');
  //The email or password is incorrect.
  //const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/auth`)
      .then((res) => console.log(res.data.login));

    axios
      .post(`http://localhost:3001/users`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log('로그인 성공');
        let token = res.headers.authorization;
        let userId = res.headers.id;
        localStorage.setItem('authorization', token);
        localStorage.setItem('id', userId);
        //dispatch(loginAction(userId))
        //navigate('/');
        //홈으로 이동
      })
      .catch((err) => {
        console.log(err);
        setLoginFailMsg('The email or password is incorrect.');
        setEmail('');
        setPassword('');
      });

    setEmailValidMsg('The email is not a valid email address.');
    setLoginFailMsg('The email or password is incorrect.');
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
