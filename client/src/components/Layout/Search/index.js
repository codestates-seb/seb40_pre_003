import { useEffect, useRef, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { searchGenAction, searchTagAction } from '../../../redux';
import SearchModal from '../../SearchModal';
import { Container, Input, SearchContainer } from './style';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const onChangeValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleEnter = (e) => {
    if (
      e.key === 'Enter' &&
      searchValue.includes('[') &&
      searchValue.includes(']')
    ) {
      dispatch(searchTagAction(searchValue.slice(1, searchValue.length - 1)));

      setIsOpen(false);
      navigate('/searchtag');
    } else if (
      e.key === 'Enter' &&
      !searchValue.includes('[') &&
      searchValue.length > 0
    ) {
      dispatch(searchGenAction(searchValue));

      navigate('/search');
      setIsOpen(false);
    } else if (searchValue.length === 0) {
      return;
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
          ref={modalRef}
        />
      </SearchContainer>
      {isOpen ? <SearchModal /> : null}
    </Container>
  );
}

export default Search;
