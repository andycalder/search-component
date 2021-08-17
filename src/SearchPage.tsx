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
  margin: 0;
`;

const Header = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  background-color: orange;
`;

interface SectionProps {
  name: string;
  results: Array<Trail>;
}

const Section = (props: SectionProps) => {
  const renderSearchItem = ((trail: Trail, index: number) => {
    return <SearchItem key={index} trail={trail} />
  });

  return (
    <List>
      <Header>{props.name}</Header>
      {props.results.filter(t => t.zone === props.name).map(renderSearchItem)}
    </List>
  );
};

interface Props {
  query: string;
}

const SearchPage = (props: Props) => {
  const results = trails.filter(trail => {
    const regex = new RegExp(props.query, 'i');
    return regex.test(trail.name);
  });

  return (
    <Container>
      <Section name="Peak Zone" results={results}/>
      <Section name="Creekside Zone" results={results}/>
    </Container>
  )
};

export default SearchPage;
