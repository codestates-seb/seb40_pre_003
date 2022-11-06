// import { TDummy } from "../../components/Main/TData/TDummyData";

import styled from 'styled-components';
import TagList from './TagList';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { GoSearch } from 'react-icons/go';
// import { TDummy } from '../../components/Main/TData/TDummyData';
const URL = process.env.REACT_APP_API_URL;

// container
const TagContainer = styled.div`
  display: flex;
  padding: 24px;
`;
const TagMain = styled.div`
  display: flex;
  flex-direction: column;
`;

//TagsTab-> head div
const TagsTabHead = styled.div`
  padding-right: 366px;
  h1 {
    font-size: 27px;
    margin-bottom: 20px;
    box-sizing: inherit;
    text-align: left;
  }
  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
  div {
    margin-bottom: 20px;
  }
  div > div {
    font-size: 14px;
    color: #0074cc;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  width: 190px;
  height: 40px;
  align-items: center;
  padding: 7.8px 9.1px 7.8px 9.1px;
  border: 1px solid #babfc3;
  border-radius: 3px;
  background-color: white;
`;

const Input = styled.input`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  margin-left: 2px;
  :focus {
    outline: none;
  }
`;

const TagsTab = () => {
  const [tagData, setTagData] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL}/api/tags`, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      })
      .then((res) => {
        console.log('TagsTab컴포 -> axios 요청 res : ', res);
        setTagData(res.data);
      })
      .catch((error) => console.log('error : ', error));
  }, []);
  console.log('TagsTab컴포 -> TagDummy 데이터 :  ', tagData);
  return (
    <TagContainer>
      <TagMain>
        <TagsTabHead>
          <h1>Tags</h1>
          <p>
            A tag is a keyword or label that categorizes your question with
            other, similar questions. <br /> Using the right tags makes it
            easier for others to find and answer your question.
          </p>
          <div>
            <div>Show all tag synonyms</div>
          </div>
          <SearchContainer>
            <GoSearch color="#838C95" />
            <Input type="text" placeholder="Filter by tag name" />
          </SearchContainer>
        </TagsTabHead>
        <div>
          <TagList tagData={tagData}></TagList>
        </div>
      </TagMain>
    </TagContainer>
  );
};

export default TagsTab;
