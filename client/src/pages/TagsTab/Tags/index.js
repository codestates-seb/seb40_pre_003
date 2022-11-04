// Tags 컴포넌트  TagList에서 맵핑을 해주면 나오는 하나하나의 Tag박스
import styled from 'styled-components';
import Tag from '../../../components/Tag/';

const TagsContainer = styled.div`
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  padding: 15px 13px 13px 13px;
`;
const TagNameDiv = styled.div``;
const TagInfoDiv = styled.div`
  margin-top: 20px;
`;
const TagInfo = styled.p`
  font-size: 13px;
  color: #3b4044;
  // word-break: break-all -> 태그 내부의 길이를 직접 정해주면 텍스트가
  // 자동으로 줄 바꿈을 하지 못해서 이 속성을 넣어주면 해결!
  word-break: break-all;
  overflow: hidden; // 사용해 영역을 감출 것 ?
  text-overflow: ellipsis; // 로 ... 을 만들기
  /* white-space: nowrap; // 아래줄로 내려가는 거 막는것 여기선 안씀! */
  display: -webkit-box; // 몇줄이상부터 ... 쓸건지 하기전에 얘 추가
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
const TagCountDiv = styled.div`
  display: flex;
  font-size: 12px;
  color: #838c95;
  margin-top: 20px;
  gap: 10px;
`;
const QuestionTotal = styled.div``;
const TodayTotal = styled.div``;
const WeekTotal = styled.div``;

const Tags = ({ list }) => {
  console.log('Tags컴포 -> TagList컴포로 부터 props맵핑받은 Data : ', list);
  return (
    <TagsContainer>
      <TagNameDiv>
        <Tag name={list.tagName}></Tag>
      </TagNameDiv>
      <TagInfoDiv>
        <TagInfo>{list.tagDescription}</TagInfo>
      </TagInfoDiv>
      <TagCountDiv>
        <QuestionTotal>
          <div>{list.questionCountTotal}</div>
          <div>questions</div>
        </QuestionTotal>
        <TodayTotal>
          <div>{list.questionCountToday}</div>
          <div>asked today</div>
        </TodayTotal>
        <WeekTotal>
          <div>{list.questionCountWeek}</div>
          <div>this week</div>
        </WeekTotal>
      </TagCountDiv>
    </TagsContainer>
  );
};

export default Tags;
