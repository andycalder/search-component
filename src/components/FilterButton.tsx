import styled from 'styled-components';
import DifficultyIcon from './DifficultyIcon';
import { Difficulty } from '../data/trail';

const Button = styled.button`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  font-size: 100%;
  line-height: 48px;
  font-family: inherit;
  border: 0;
  padding: 0 24px 0 24px;
  margin-right: 12px;
  width: fit-content;
  height: 48px;
	border-radius: 24px;
  background-color: rgb(55,55,55);
  color: white;
`;

interface FilterButtonProps {
  icon: Difficulty;
  text: string;
  onClick: () => void;
}

const FilterButton = (props: FilterButtonProps) => {
  return (
    <Button onClick={() => props.onClick()}>
      <DifficultyIcon difficulty={props.icon} />
      {props.text}
    </Button>
  );
};

export default FilterButton;
