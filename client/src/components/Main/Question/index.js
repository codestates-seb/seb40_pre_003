import styled from 'styled-components';

// ------------ Question.js  각 질문들 컴포넌트 -------

// 질문리스트 전체
const QuList = styled.li`
  display: flex;
  margin-top: 10px;
  height: 118px;
`;

// 질문리스트 윗줄!
const Horizon = styled.hr`
  margin-top: 27px;
  opacity: 0.5;
  width: 100%;
  height: 1px;
  color: red;
`;

// 질문리스트 -> 왼쪽섹션 -> 투표,조회수,답변수
const LeftSection = styled.section`
  width: 108px;
  text-align: right;
  font-size: 13px;
`;

// 질문리스트 -> 오른쪽섹션 -> 질문제목,내용 & 하단엔 footer
const RigthSection = styled.section`
  margin: 0 0 0 20px;
  font-size: 17px;
`;

// 질문리스트 -> 내부 ->  질문제목, 질문 내용
const TextSection = styled.section``;

// 질문리스트 -> 하단 -> 태그목록, 질문자의정보(이미지, 닉네임, 작성날짜)
const TagInfoSection = styled.footer``;

const Question = () => {
  return (
    <div>
      <Horizon></Horizon>
      <QuList>
        <LeftSection>조회수</LeftSection>
        <RigthSection>
          <TextSection>제목, 내용</TextSection>
          <TagInfoSection>
            태그들 & 작성자 이미지,닉네임 & 작성날짜
          </TagInfoSection>
        </RigthSection>
      </QuList>
    </div>
  );
};

export default Question;
