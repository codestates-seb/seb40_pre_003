import styled from 'styled-components';

// import styled from 'styled-components'
const NoSearchMainDiv = styled.div`
  border-top: 1px solid #d6d9dc;
`;

const NoSearch = ({ noTag }) => {
  return <NoSearchMainDiv>Results for [{noTag}]</NoSearchMainDiv>;
};

export default NoSearch;
