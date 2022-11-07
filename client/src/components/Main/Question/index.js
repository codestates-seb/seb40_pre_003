import removeMarkdown from 'markdown-to-text';
import userimg from '../../../assets/images/padakmon.png';
import { getPrettyTime } from '../../../util/getPrettyTime';
import Tag from '../../Tag';
import './index.css';
import {
  AnswerCount,
  CountBox,
  InfoBox,
  InfoName,
  LastTime,
  LeftSection,
  QuBox,
  QuestionText,
  QuestionTitle,
  QuList,
  RightSection,
  TagBox,
  TagInfoFooter,
  TextSection,
  UserImg,
  ViewsCount,
  VotesCount,
} from './style';

const Question = ({ list }) => {
  return (
    <QuBox>
      <QuList>
        <LeftSection>
          <CountBox>
            <VotesCount>
              <span>{list.score} votes</span>
            </VotesCount>
            <AnswerCount>
              <span>{list.answerCount} answers</span>
            </AnswerCount>
            <ViewsCount>
              <span>{list.viewCount} views</span>
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
              <UserImg src={userimg} alt=""></UserImg>
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
