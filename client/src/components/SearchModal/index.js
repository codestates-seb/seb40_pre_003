import styled from 'styled-components';

const SearchModal = () => {
  return (
    <Container>
      <div>
        <div>
          <span className="seachtext">[tag]</span>{' '}
          <span className="subtext">search within a tag</span>
        </div>
        <br></br>
        <div>
          <span className="seachtext">user:1234 </span>{' '}
          <span className="subtext">search by author</span>
        </div>
      </div>
      <div>
        <div>
          <span className="seachtext">answers:0 </span>{' '}
          <span className="subtext">unanswered questions </span>
        </div>
        <br></br>
        <div>
          <span className="seachtext">score:3 </span>{' '}
          <span className="subtext">posts with a 3+ score</span>
        </div>
      </div>
    </Container>
  );
};

export default SearchModal;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 56%;
  background-color: #fff;
  position: absolute; //포지션 잡느라 죽는줄..ㅠㅠ
  top: 55px;
  //left: 540px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 2px;
  padding: 10px 30px;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 150px;
    margin-top: 10px;
    margin-bottom: 10px;

    > div > span {
      margin: 5px;
      font-size: 14px;
    }
    > div > span.seachtext {
      color: black;
      font-size: 16px;
      font-weight: 500;
    }
    > div > span.subtext {
      color: grey;
    }
  }
`;
