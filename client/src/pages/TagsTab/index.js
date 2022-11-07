import TagList from './TagList';
import { GoSearch } from 'react-icons/go';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TagContainer,
  TagMain,
  TagsTabHead,
  SearchContainer,
  Input,
} from './style';

const TagsTab = () => {
  const [tagData, setTagData] = useState(null);

  useEffect(() => {
    axios
      .get('/api/tags', {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'ngrok-skip-browser-warning': '111',
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
