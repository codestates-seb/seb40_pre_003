import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
// import SearchResults from '../../../pages/SearchResults';
import SearchModal from '../../SearchModal';
import { Container, Input, SearchContainer } from './style';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  // 검색조건에 tag: 가 있는지 없는지 - 불린값
  // let isSearchTag = false;
  // console.log(searchValue);

  // 검색창에 tag: 이 들어갈때
  const onChangeValue = (e) => {
    // if (e.target.value.includes('tag:')) {
    //   console.log(e.target.value);
    //   setSearchValue(e.target.value.slice(4));
    //   // isSearchTag = true;
    // }
    setSearchValue(e.target.value);
    console.log(searchValue);
    // isSearchTag = false;
  };

  // tag: 가 포함된 상태로 Enter를 눌렀을때랑 아닐때 이벤트핸들러
  const handleEnter = (e) => {
    console.log(searchValue);
    if (e.key === 'Enter' && searchValue.includes('tag:')) {
      console.log('tag: 검색하고 엔터');
    } else if (e.key === 'Enter' && !searchValue.includes('tag:')) {
      console.log('일반 검색하고 엔터!');
      navigate('/search');
    }
  };

  return (
    <Container>
      <SearchContainer>
        <GoSearch color="#838C95" />
        <Input
          type="search"
          placeholder="Search..."
          onChange={onChangeValue}
          onKeyPress={handleEnter}
          onClick={handleOnClick}
        />
      </SearchContainer>
      {isOpen ? <SearchModal /> : null}
    </Container>
  );
}

export default Search;
