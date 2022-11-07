import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import removeMarkdown from 'markdown-to-text';
import { getPrettyTime } from '../../../util/getPrettyTime';
import './index.css';
import {
  QuBox,
  QuList,
  LeftSection,
  CountBox,
  VotesCount,
  AnswerCount,
  ViewsCount,
  RightSection,
  TextSection,
  QuestionTitle,
  QuestionText,
  TagInfoFooter,
  TagBox,
  InfoBox,
  InfoName,
  LastTime,
} from './style';
import Tag from '../../Tag';

const Question = ({ list }) => {
  console.log('Question컴포 -> props로 받아온 Data.body : ', list.body);

  return (
    <QuBox>
      <QuList>
        <LeftSection>
          <CountBox>
            <VotesCount>
              <span>{list.score} votes</span>
            </VotesCount>
            <AnswerCount>
              <span>{list.answers} answers</span>
            </AnswerCount>
            <ViewsCount>
              <span>{list.views} views</span>
            </ViewsCount>
          </CountBox>
        </LeftSection>
        <RightSection>
          <TextSection>
            <QuestionTitle to={`/questions/${list.questionId}`}>
              {list.title}
            </QuestionTitle>
            <QuestionText>{removeMarkdown(list.body)}</QuestionText>
          </TextSection>
          <TagInfoFooter>
            <TagBox>
              {list.tags.map((el) => {
                return <Tag key={el.toString()} name={el} />;
              })}
            </TagBox>
            <InfoBox>
              <FontAwesomeIcon icon={faUser} className="fontImg-user" />
              <InfoName>{list.user.displayName}</InfoName>
              <LastTime>
                <span>{`asked ${getPrettyTime(
                  new Date(list.createdAt)
                )}`}</span>
              </LastTime>
            </InfoBox>
          </TagInfoFooter>
        </RightSection>
      </QuList>
    </QuBox>
  );
};

export default Question;
