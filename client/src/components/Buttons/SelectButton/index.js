//Users 페이지에서 사용
import { useState } from 'react';
import { Buttons } from './style';

const SelectButton = () => {
  const name = ['Reputation', 'New users', 'Voters', 'Editors', 'Moderators'];
  const [btnActive, setBtnActive] = useState(4);
  return (
    <Buttons>
      {name.map((ele, index) => (
        <button
          onClick={(e) => {
            setBtnActive(e.target.value);
          }}
          key={index}
          value={index}
          className={'btn' + (index === Number(btnActive) ? ' active' : '')}
          id={
            (index === 0 ? 'left-radius' : '') ||
            (index === 4 ? 'right-radius' : '')
          }
        >
          {ele}
        </button>
      ))}
    </Buttons>
  );
};
export default SelectButton;
