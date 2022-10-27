import { useState } from 'react';

import { AiFillTags, AiFillTrophy } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import { SiGithub } from 'react-icons/si';
import { TbTriangle } from 'react-icons/tb';
import { Container, SignupBlock } from './style';

import axios from 'axios';

const Signup = () => {
  //signup 인풋 항목: name, email, password
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //오류메시지 //The email is not a valid email address.
  const [nameValidMsg, setNameValidMsg] = useState('');
  const [emailValidMsg, setEmailValidMsg] = useState('');
  const [passwordValidMsg, setPasswordValidMsg] = useState('');
  //navigate -> 회원가입 성공 시 로그인페이지?홈페이지?로 이동
  //useHistory가 useNavigate로 바뀜
  //const navigate = useNavigate();

  //회원가입 버튼 -> post 요청
  const handleSubmit = (e) => {
    e.preventDefault();
    //axios.get(`http://localhost:3001/users`).then((res)=>console.log(res))
    //유효성 검사하기
    console.log('네임', displayName);
    if (displayName.length === 0) {
      setNameValidMsg('displayName cannot be empty.');
      return;
    } else if (email.length === 0) {
      setEmailValidMsg('Email cannot be empty.');
      return;
    } else if (email.length < 4) {
      console.log('짧음');
      setEmailValidMsg('The email is not a valid email address.');
      return;
    } else if (password.length === 0) {
      setPasswordValidMsg('Password cannot be empty.');
      return;
    }
    return (
      axios
        //.post(`${process.env.어쩌고환경변수}/회원가입주소`, {
        .post(`http://localhost:3001/users`, {
          displayName: displayName,
          email: email,
          password: password,
        })
        .then((res) => {
          alert('회원가입성공');
          //회원가입 성공하면 인풋창 비워줘야하나?아니면 다른 페이지로 이동하니까 상관없나??
          console.log(res);
          //console.log(res.data.jwt); //토큰을 받아와야 하는데, 지금은 undefined
          //localStorage.setItem('token', res.data.jwt)
          //navigate(`/users/login`); //회원가입 후 로그인으로..
        })
        .catch((error) => {
          //오류메시지
          console.log('에러어어어어어');
          if (error.response) {
            console.log(error.response.data);
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
        <section className="social_login">
          <div>
            <button>
              <FcGoogle className="icons" size={22} />
              Sign up with Google
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
        <section className="email_login">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Display name</label>
              <input
                type={'text'}
                onChange={(e) => {
                  setDisplayName(e.target.value);
                }}
              ></input>
              {nameValidMsg ? <div className="msg">{nameValidMsg}</div> : ''}
            </div>
            <div>
              <label>Email</label>
              <input
                type={'text'}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              {emailValidMsg ? <div className="msg">{emailValidMsg}</div> : ''}
            </div>
            <div>
              <label>Password</label>
              <input
                type={'password'}
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
            <button className="login_btn">Sign up</button>
          </form>
        </section>
        <div className="login_guide">
          <div>
            {/* a 태그는 react-router-dom에서 link to로 바꿔야 함 <Link to="/login">Log in</Link> */}
            Already have an account?
            <a href="">Log in</a>
          </div>
          <br></br>
          <div>
            Are you an employer?
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
