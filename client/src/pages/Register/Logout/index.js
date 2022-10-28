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
          askubuntu.com
        </div>
        <div className="linked_site">
          <Logo src={mathoverflow} />
          mathoverflow.net
        </div>
        <div className="linked_site">
          <Logo src={serverfault} />
          serverfault.com
        </div>
        <div className="linked_site">
          <Logo src={stackapps} />
          stackapp.com
        </div>
        <div className="linked_site">
          <Logo src={stackexchange} />
          stackexchange.com
        </div>
        <div className="linked_site">
          <Logo src={stackoverflow} />
          stackoverflow.com
        </div>
        <div className="linked_site">
          <Logo src={superuser} />
          superuser.com
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
