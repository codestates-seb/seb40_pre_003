import { useEffect, useRef, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
// import SearchResults from '../../../pages/SearchResults';
import SearchModal from '../../SearchModal';
import { Container, Input, SearchContainer } from './style';
import { searchGenAction, searchTagAction } from '../../../redux';
import { useDispatch } from 'react-redux';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };
  const modalRef = useRef();

  const clickModalOutside = (event) => {
    if (
      isOpen &&
      (!modalRef.current || !modalRef.current.contains(event.target))
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', clickModalOutside);

    return () => {
      window.removeEventListener('mousedown', clickModalOutside);
    };
  });

  // 검색조건에 tag: 가 있는지 없는지 - 불린값
  // let isSearchTag = false;
  // console.log(searchValue);

  // 검색창에 tag: 이 들어갈때
  const onChangeValue = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  // const onChangeInitialValue = () => {
  //   setSearchValue('');
  // };

  // tag: 가 포함된 상태로 Enter를 눌렀을때랑 아닐때 이벤트핸들러

  const handleEnter = (e) => {
    console.log('Search컴포-> searchValue : ', searchValue);
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
      console.log('초기화된 searchValue : ', searchValue);
      setIsOpen(false);
      navigate('/searchtag');
    } else if (
      e.key === 'Enter' &&
      !searchValue.includes('[') &&
      searchValue.length > 0
    ) {
      dispatch(searchGenAction(searchValue));
      console.log('Search컴포->일반검색->엔터->상태값-> : ', searchValue);

      console.log('초기화된 searchValue: ', searchValue);
      navigate('/search');
      setIsOpen(false);
    } else if (searchValue.length === 0) {
      return;
    }
  };

  // if (!modalRef.current) {
  //   setIsOpen(false);
  // }

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
          ref={modalRef}
        />
      </SearchContainer>
      {isOpen ? <SearchModal /> : null}
    </Container>
  );
}

export default Search;
