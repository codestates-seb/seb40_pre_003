import { GoSearch } from 'react-icons/go';
import './style.css';
import {
  NoSearchDiv,
  NoSearchMainDiv,
  ImgDiv,
  FirstTextDiv,
  SecondTextDiv,
  ThirdTextDiv,
} from './style.js';

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
