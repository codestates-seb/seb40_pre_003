import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { Container, Input, SearchContainer } from './style';
import { searchGenAction, searchTagAction } from '../../../redux';
import { useDispatch } from 'react-redux';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);

  // 검색창에 tag: 이 들어갈때
  const onChangeValue = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  // tag: 가 포함된 상태로 Enter를 눌렀을때랑 아닐때 이벤트핸들러
  const handleEnter = (e) => {
    console.log(searchValue);
    if (
      e.key === 'Enter' &&
      searchValue.includes('[') &&
      searchValue.includes(']')
    ) {
      // Questions tagged [] 로 이동!
      dispatch(searchTagAction(searchValue.slice(1, searchValue.length - 1)));
      console.log(
        'Search컴포->[tag]검색->엔터->상태값-> : ',
        searchValue.slice(1, searchValue.length - 1)
      );
    } else if (e.key === 'Enter' && !searchValue.includes('[')) {
      dispatch(searchGenAction(searchValue));
      console.log('Search컴포->일반검색->엔터->상태값-> : ', searchValue);
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
        />
      </SearchContainer>
    </Container>
  );
}

export default Search;
