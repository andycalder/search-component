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

  const items = props.results.filter(t => t.zone === props.name).map(renderSearchItem)

  return (
    <List>
      {items.length > 0 && <Header>{props.name}</Header>}
      {items}
    </List>
  );
};

export default SearchSection;
