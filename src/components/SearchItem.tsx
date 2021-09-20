import styled from 'styled-components';
import DifficultyIcon from './DifficultyIcon';
import { Trail } from '../data/trail';

const ListItem = styled.li`
  width: 100%;
  height: 45px;
  display: flex;
  cursor: pointer;
  color: white;
  line-height: 45px;
`;

interface Props {
  trail: Trail;
  showTrail: (trail: Trail) => void;
}

const SearchItem = (props: Props) => {
  return (
    <ListItem onClick={() => props.showTrail(props.trail)}>
      <DifficultyIcon width={80} difficulty={props.trail.difficulty} />
      {props.trail.name}
    </ListItem>
  );
}

export default SearchItem;
