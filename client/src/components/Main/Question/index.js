import styled from 'styled-components';
// react font-awesome npm i 로 필요 툴 설치하고 import 해오기
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

// ------------ Question.js  각 질문들 컴포넌트 -------

// 질문리스트 전체 div
const QuBox = styled.div`
  padding: 15px 0 10px 0;
  border-top: 1px solid #d6d9dc;
`;

// 질문리스트 내부
const QuList = styled.li`
  display: flex;
  margin-top: 10px;
  height: 118px;
`;

// 질문리스트 -> 왼쪽섹션 -> 투표,조회수,답변수
const LeftSection = styled.section`
  width: 108px;
`;

// 왼쪽섹션 -> votes , answers, views
const CountBox = styled.div`
  font-size: 13px;
  text-align: right;
`;
// 왼쪽섹션-> LeftSection/CountBox/VotesCount
const VotesCount = styled.div`
  color: #0c0d0e;
  font-weight: bolder; // 글자를 상속된 값보다 굵게 / bold는 굵기
`;

// 왼쪽섹션-> LeftSection/CountBox/AnswerCount
const AnswerCount = styled.button`
  border: 1px solid #2f6f44;
  border-radius: 3px;
  background-color: white;
  padding: 3px;
  color: #2f6f44;
`;
// 왼쪽섹션-> LeftSection/CountBox/ViewsCount
const ViewsCount = styled.div`
  color: #6a737c;
`;

// 질문리스트 -> 오른쪽섹션 -> 질문제목,내용 & 하단엔 footer
const RigthSection = styled.section`
  width: 630px;
  margin: 0 0 0 20px;
  font-size: 17px;
`;

// 질문리스트 -> 내부 ->  질문제목, 질문 내용
const TextSection = styled.section``;

// 질문 제목 -> 링크달아서 클릭시 질문내용 상세페이지로 ~
const QuestionTitle = styled.a`
  color: #0063bf;
  cursor: pointer;
`;

// 질문 내용
const QuestionText = styled.p`
  font-size: 13px;
  margin-top: 5px;
`;

// 질문리스트 -> 하단 -> 태그목록, 질문자의정보(이미지, 닉네임, 작성날짜)
const TagInfoFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin: 30px 60px 0 0;
  height: 27px;
`;

// 오른쪽섹션 -> footer 내부 -> 태그박스
const TagBox = styled.div`
  height: 27px;
`;
// 오른쪽섹션->footer->태그박스-> 버튼태그
const TagBtn = styled.button`
  height: 23px;
  padding: 0.4em 0.5em;
  margin: 2px;
  border: none;
  border-radius: 3px;
  background-color: #e1ecf4;
  text-align: center;
  font-size: 12px;
  color: rgb(57, 115, 157);
  cursor: pointer;
`;

// 오른쪽섹션 -> footer 내부 -> 작성자 info(img,name,작성후지난시간)
const InfoBox = styled.div`
  display: flex;
  column-gap: 6px; // InfoBox 내부 목록들 간격 주기
`;

// 오른쪽섹션/footer/InfoBox/InfoName
const InfoName = styled.a`
  min-width: 0;
  height: 12px;
  font-size: 14px;
  font-weight: bolder;
  color: #0074cc;
`;

// 오른쪽섹션/footer/InfoBox/LastTime
const LastTime = styled.div`
  min-width: 0;
  height: 15px;
  font-size: 14px;
  color: #6a737c;
`;

const Question = ({ list }) => {
  console.log(list.title);
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
        <RigthSection>
          <TextSection>
            <QuestionTitle>{list.title}</QuestionTitle>
            <QuestionText>{list.body}</QuestionText>
          </TextSection>
          <TagInfoFooter>
            <TagBox>
              <TagBtn>
                <span>javascript</span>
              </TagBtn>
              <TagBtn>
                <span>react</span>
              </TagBtn>
              <TagBtn>
                <span>java</span>
              </TagBtn>
            </TagBox>
            <InfoBox>
              <FontAwesomeIcon icon={faUser} className="fontImg" />
              <InfoName>{list.user.displayName}</InfoName>
              <LastTime>
                <span>asked 10 secs ago</span>
              </LastTime>
            </InfoBox>
          </TagInfoFooter>
        </RigthSection>
      </QuList>
    </QuBox>
  );
};

export default Question;
