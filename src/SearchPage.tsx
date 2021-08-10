import styled from 'styled-components';
import SearchItem, { Trail } from './SearchItem';
import data from './trails.json';

const trails = data.trails.map(trail => {
  return Object.assign(new Trail(), trail);
});

const Container = styled.div`
  width: 100%;
  overflow: scroll;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const SearchPage = () => {
  const listItems = trails.map((trail, index) => {
    return <SearchItem key={index} trail={trail} />
  });

  return (
    <Container>
      <List>
        {listItems}
      </List>
    </Container>
  )
};

export default SearchPage;
