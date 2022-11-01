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

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidMsg, setEmailValidMsg] = useState('');
  //The email is not a valid email address.
  const [loginFailMsg, setLoginFailMsg] = useState('');
  //The email or password is incorrect.
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.isLogin);

  //유즈이펙트를 여기에 넣어야 하나???

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

    //될 수 있으면, config를 저장해둔 axios instance를 사용하는 것이 좋음.
    //const instance = axios.create(//config객체)
    const loginData = {
      email: email,
      password: password,
    };
    const loginConfig = {
      withCredentials: true,
    };

    //로그인한 유저를 처음으로 서버에 등록: post요청 -> 앞으로 확인할 때는 get요청
    axios
      .post(`/api/auth/login`, loginData, loginConfig)
      // json-server용 json-server --watch mockData.json --port 8080
      // .post(`http://localhost:8080/users`, loginData, loginConfig)
      .then((res) => {
        console.log('로그인 성공');
        console.log('로그인 시 들어오는 정보', res);

        let accessToken = res.headers.accesstoken;
        let userId = res.headers.id;
        let displayName = res.headers.displayname;
        //로컬 스토리지에 키와 값을 텍스트형식으로 담는다 -> JWT를 담아서 요청을 보낼 때 사용할 예정(서버와 통신/인가)
        //스토리지에 저장한 토큰은 -> 새로고침 시에 사용
        localStorage.setItem('accesstoken', accessToken);
        localStorage.setItem('id', userId);
        localStorage.setItem('displayname', displayName);

        console.log(localStorage);
        //const isLoginCheck = localStorage.getItem('accesstoken', accessToken);
        //리덕스는 프론트에서 로그인된 유저 상태값 관리 용도(=사이트 내 액션 수행에서 사용)
        //잠시 dispatch(loginAction(userId));
        dispatch(loginAction(userId));
        console.log('로그인액션전달', dispatch(loginAction(userId)));
        navigate('/'); //콘솔 확인을 위해 잠시 막아둠
        //홈으로 이동 + 헤더에 로그인버튼이 사라지고, 이미지로 바뀌는거!!!
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.log('에러인건가', error);
        if (error.message) {
          setLoginFailMsg('The email or password is incorrect.');
          setEmail(''); //왜 초기화가 안되지??아...리렌더링 시켜야하는데
          setPassword('');
          window.location.reload(); //리렌더링을 위한 임시방편
        }
      });
  };
  //로그인유지를 위해 useEffect를 써야하는데 그 위치를 모르겠다
  // useEffect(() => {
  //   if (isLogin) {
  //     // 로그인유지를 위해서 isLogin을 true로 변경해줘야한다.
  //     dispatch(loginAction(userId));
  //   }
  // }, []);

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
