import styled from 'styled-components';
import DifficultyIcon from './DifficultyIcon';
import { Trail } from '../data/trail';

const ListItem = styled.li`
  width: 100%;
  height: 45px;
  display: flex;
`;

const Name = styled.div`
  color: darkgray;
  line-height: 45px;
  flex-grow: 1;
`;

const Icon = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  trail: Trail;
}

const SearchItem = (props: Props) => {
  return (
    <ListItem>
      <Icon>
        <DifficultyIcon difficulty={props.trail.difficulty} />
      </Icon>
      <Name>
        {props.trail.name}
      </Name>
    </ListItem>
  );
}

export default SearchItem;
