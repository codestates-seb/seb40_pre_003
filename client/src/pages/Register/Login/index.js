import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { GrFacebook } from "react-icons/gr";
import { LoginBlock } from "./style";

export default function Login() {
  console.log("콘솔");
  return (
    <LoginBlock className="login_block">
      <div>
        <img src="https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon@2.png?v=73d79a89bded" />
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
        <form>
          <div>
            <label>Email</label>
            <input type="text" name="email" onChange={() => {}}></input>
          </div>
          <div>
            <label>Password</label>
            <input type="password" onChange={() => {}}></input>
          </div>
          <button className="login_btn">Log in</button>
        </form>
      </section>
      <div className="login_guide">
        <div>
          Don't have an account? <a href="">Sign up</a>
        </div>
        <br></br>
        <div>
          Are you an employer? <a href="">Sign up on Talent</a>
        </div>
      </div>
    </LoginBlock>
  );
}
