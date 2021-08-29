import styled from 'styled-components';
import SearchItem from './SearchItem';
import { Trail } from '../data/trail';

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

const SearchSection = (props: SectionProps) => {
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

export default SearchSection;
