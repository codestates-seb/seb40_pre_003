import ubuntu from '../../../../src/assets/images/askubuntu.png';
import mathoverflow from '../../../../src/assets/images/mathoverflow.png';
import serverfault from '../../../../src/assets/images/serverfault.png';
import stackapps from '../../../../src/assets/images/stackapps.png';
import stackexchange from '../../../../src/assets/images/stackexchange.png';
import stackoverflow from '../../../../src/assets/images/stackoverflow.png';
import superuser from '../../../../src/assets/images/superuser.png';
import { logoutAction } from '../../../redux';
import { Container, Logo, LogoutBlock } from './style';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    //로그아웃 구현방법2...서버logout api로 요청을 보내고 응답 받아서 처리
    console.log('로그아웃성공');
    //로컬스토리지에 담았던 키(스트링형식)를 제거
    dispatch(logoutAction());
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('id');
    localStorage.removeItem('googleAceessToken');

    navigate('/');
  };

  const handleCancelClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <div className="logout_guide">
        Clicking “Log out” will log you out of the following <br></br>domains on
        this device:
      </div>
      <LogoutBlock>
        <div className="linked_site">
          <Logo src={ubuntu} />
          {/* 외부링크는 Link태그가 아니라 a태그만 가능 */}
          <a href="https://askubuntu.com/">askubuntu.com</a>
        </div>
        <div className="linked_site">
          <Logo src={mathoverflow} />
          <a href="https://mathoverflow.net/">mathoverflow.net</a>
        </div>
        <div className="linked_site">
          <Logo src={serverfault} />
          <a href="https://serverfault.com/">serverfault.com</a>
        </div>
        <div className="linked_site">
          <Logo src={stackapps} />
          <a href="https://stackapps.com/">stackapp.com</a>
        </div>
        <div className="linked_site">
          <Logo src={stackexchange} />
          <a href="https://stackexchange.com/">stackexchange.com</a>
        </div>
        <div className="linked_site">
          <Logo src={stackoverflow} />
          <a href="https://stackoverflow.com/">stackoverflow.com</a>
        </div>
        <div className="linked_site">
          <Logo src={superuser} />
          <a href="https://superuser.com/">superuser.com</a>
        </div>
        <br />
        <hr></hr>
        <div id="checkbox">
          <input type={'checkbox'}></input>
          <span>Log out on all devices</span>
        </div>
        <div id="buttons">
          <button id="logout_button" onClick={handleLogoutClick}>
            Log out
          </button>
          <button id="cancel_button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
        <div id="logout_all_device_text">
          If you’re on a shared computer, remember to
          <br />
          log out of your Open ID provider (Facebook,
          <br />
          Google, Stack Exchange, etc.) as well.
        </div>
      </LogoutBlock>
    </Container>
  );
}
