import { useState } from 'react';

import axios from 'axios';
import { AiFillTags, AiFillTrophy } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import { SiGithub } from 'react-icons/si';
import { TbTriangle } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import { Container, SignupBlock } from './style';
//axios.defaults.withCredentials = true;

const Signup = () => {
  //signup 인풋 항목: name, email, password
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  //오류메시지 //The email is not a valid email address.
  const [nameValidMsg, setNameValidMsg] = useState('');
  const [emailValidMsg, setEmailValidMsg] = useState('');
  const [passwordValidMsg, setPasswordValidMsg] = useState('');

  //회원가입 버튼 -> post 요청
  const handleSubmit = (e) => {
    e.preventDefault();
    //유효성 검사하기
    //디스플레이네임은 영어, 숫자만 가능, 길이 15로 제한
    //이메일은 이메일 폼
    //비밀번호는 영어+숫자, 길이는 20
    if (displayName.length === 0) {
      setNameValidMsg('displayName cannot be empty.');
      return;
    } else if (displayName.length > 15 || displayName.length < 4) {
      setNameValidMsg('The displayName is not a valid displayName.');
      return;
    } else if (email.length === 0) {
      setEmailValidMsg('Email cannot be empty.');
      return;
    } else if (!(email.includes('@') && email.includes('.'))) {
      console.log('이메일 유효성검사: @랑 .이 없음');
      setEmailValidMsg('The email is not a valid email address.');
      return;
    } else if (password.length === 0) {
      setPasswordValidMsg('Password cannot be empty.');
      return;
    } else if (password.length > 20) {
      console.log('비밀번호 유효성검사: 20자 미만');
      setPasswordValidMsg('The password is not a valid password.');
      return;
    }
    return (
      axios
        //.post(`${process.env.어쩌고환경변수}/회원가입주소`, {
        .post(`/api/users`, {
          displayName: displayName,
          email: email,
          password: password,
        })
        .then((res) => {
          //alert('회원가입성공');
          console.log('회원가입성공');
          console.log(res);
          navigate('/login'); //회원가입 후 홈으로?로그인페이지로?축하페이지로?
          //자동 로그인되면 좋겠지만...그러면 여기서 axios요청해야 하나?
          //어쨌든 회원가입 후 사용자가 하든, 자동으로 되든 로그인과정이 있어야 한다.
        })
        .catch((error) => {
          //오류메시지
          console.log('에러어어어어어');
          console.log(error.response);
          if (error.response.data === '형식에 맞지 않음') {
            setNameValidMsg('The displayName is not a valid displayName.');
          }
          if (error.response.data === '크기가 8에서 20 사이여야 합니다') {
            setNameValidMsg('The displayName is not a valid displayName.');
          } else if (
            error.response.data === '올바른 형식의 이메일 주소여야 합니다'
          ) {
            setEmailValidMsg('The email is not a valid email address.');
          } else if (
            error.response.data ===
            '"^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d]*$"와 일치해야 합니다'
          ) {
            setPasswordValidMsg('The password is not a valid password.');
          }
        })
    );
  };

  return (
    <Container>
      <div className="signup_ad">
        <h2>Join the Stack Overflow community</h2>
        <div>
          <RiQuestionAnswerFill className="icons" />
          Get unstuck — ask a question
        </div>
        <div>
          <TbTriangle className="icons" />
          Unlock new privileges like voting and commenting
        </div>
        <div>
          <AiFillTags className="icons" />
          Save your favorite tags, filters, and jobs
        </div>
        <div>
          <AiFillTrophy className="icons" />
          Earn reputation and badges
        </div>
      </div>
      <SignupBlock className="">
        {/* 소셜 가입 */}
        <section className="social_signup">
          <div>
            <button>
              <FcGoogle className="icons" size={22} />
              <span>Sign up with Google</span>
            </button>
            <button>
              <SiGithub className="icons" size={22} />
              Sign up with Github
            </button>
            <button>
              <GrFacebook className="icons" size={20} />
              Sign up with Facebook
            </button>
          </div>
        </section>
        {/* 이메일 가입 */}
        <section className="email_signup">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="displayName">Display name</label>
              <input
                type="text"
                htmlFor="displayName"
                onChange={(e) => {
                  setDisplayName(e.target.value);
                }}
              ></input>
              {nameValidMsg ? <div className="msg">{nameValidMsg}</div> : ''}
            </div>
            <div>
              <label htmlFor={'Email'}>Email</label>
              <input
                type="text"
                htmlFor="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              {emailValidMsg ? <div className="msg">{emailValidMsg}</div> : ''}
            </div>
            <div>
              <label htmlFor={'password'}>Password</label>
              <input
                name="password"
                type="password"
                htmlFor="password"
                autoComplete="on"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              {passwordValidMsg ? (
                <div className="msg">{passwordValidMsg}</div>
              ) : (
                ''
              )}
            </div>
            <button className="signup_btn">Sign up</button>
          </form>
        </section>
        <div className="signup_guide">
          <div>
            Already have an account?
            <Link to="/login">Log in</Link>
          </div>
          <br></br>
          <div>
            Are you an employer?
            {/* 외부링크로 이동 */}
            <a href="https://talent.stackoverflow.com/users/login">
              Sign up on Talent
            </a>
          </div>
        </div>
      </SignupBlock>
    </Container>
  );
};
export default Signup;
