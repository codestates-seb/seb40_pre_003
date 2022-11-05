import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';
import './style.css';

const NoSearchDiv = styled.div`
  border-top: 1px solid #d6d9dc;
  text-align: center;
`;
const NoSearchMainDiv = styled.div`
  margin-top: 50px;
`;
const ImgDiv = styled.div`
  margin-bottom: 25px;
`;
const FirstTextDiv = styled.div`
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 10px;
  span {
    font-weight: bolder;
  }
`;
const SecondTextDiv = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
  span {
    font-weight: bolder;
  }
`;

const ThirdTextDiv = styled.div`
  margin-bottom: 200px;
  font-size: 15px;
`;

const NoSearch = ({ search }) => {
  return (
    <NoSearchDiv>
      <NoSearchMainDiv>
        <ImgDiv>
          <GoSearch className="nosearch-img"></GoSearch>
        </ImgDiv>
        <FirstTextDiv>
          We couldn`t find anything for <span>{search}</span>.
        </FirstTextDiv>
        <SecondTextDiv>
          <span>Search options: </span> not deleted
        </SecondTextDiv>
        <ThirdTextDiv>Try different or less specific keywords.</ThirdTextDiv>
      </NoSearchMainDiv>
    </NoSearchDiv>
  );
};

export default NoSearch;
