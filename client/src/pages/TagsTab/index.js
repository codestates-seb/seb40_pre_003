import axios from 'axios';
import { useEffect, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import PaginationBar from '../../components/PaginationBar';
import {
  Input,
  SearchContainer,
  TagContainer,
  TagMain,
  TagsTabHead,
} from './style';
import TagList from './TagList';

const URL = process.env.REACT_APP_API_URL;

const TagsTab = () => {
  const [tagData, setTagData] = useState(null);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPage] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL}/api/tags?size=20&page=${page}`, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      })
      .then((res) => {
        setTagData(res.data);
        setTotalElements(res.data.pageInfo.totalElements);
        setTotalPage(res.data.pageInfo.totalPages);
      })
      .catch((error) => console.log('error : ', error));
  }, [page]);

  const handlePageChange = (e) => {
    setPage(e);
  };

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
        <PaginationBar
          page={page}
          totalElements={totalElements}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
        />
      </TagMain>
    </TagContainer>
  );
};

export default TagsTab;
