import ubuntu from '../../../../src/assets/images/askubuntu.png';
import mathoverflow from '../../../../src/assets/images/mathoverflow.png';
import serverfault from '../../../../src/assets/images/serverfault.png';
import stackapps from '../../../../src/assets/images/stackapps.png';
import stackexchange from '../../../../src/assets/images/stackexchange.png';
import stackoverflow from '../../../../src/assets/images/stackoverflow.png';
import superuser from '../../../../src/assets/images/superuser.png';

import { Container, Logo, LogoutBlock } from './style';

export default function Logout() {
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
          <button id="logout_button">Log out</button>
          <button id="cancel_button">Cancel</button>
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