import { CardContainer, IMG, TextBlock } from './style';
import padakmon from '../../assets/images/padakmon.png';

const UserCard = ({ displayName, answerCount, tags, userId }) => {
  return (
    <CardContainer>
      <IMG src={padakmon} alt="로고" />
      <TextBlock>
        <div id="displayname">{displayName}</div>
        <div id="answercount">{answerCount}</div>
        <div>
          {tags.map((ele) => (
            <span key={userId}>{ele}</span>
          ))}
        </div>
      </TextBlock>
    </CardContainer>
  );
};

export default UserCard;
