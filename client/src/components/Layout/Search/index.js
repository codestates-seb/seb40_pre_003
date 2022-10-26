import { GoSearch } from 'react-icons/go';
import { Container, Input, SearchContainer } from './style';

function Search() {
  return (
    <Container>
      <SearchContainer>
        <GoSearch color="#838C95" />
        <Input placeholder="Search..." />
      </SearchContainer>
    </Container>
  );
}

export default Search;
