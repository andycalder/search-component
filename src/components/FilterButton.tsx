import styled from 'styled-components';
import DifficultyIcon from './DifficultyIcon';
import { Difficulty } from '../data/trail';

const Button = styled.button`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  font-family: inherit;
  border: 0;
  padding: 0 16px 0 16px;
  margin: 12px;
  margin-right: 0;
  width: fit-content;
  height: 32px;
  border: 1px solid rgb(72, 72, 72);
	border-radius: 16px;
  background-color: rgb(55,55,55);
`;

const ButtonText = styled.div`
  color: white;
  font-size: 1.4rem;
  line-height: 32px;
  margin-left: 7px;
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
      <ButtonText>{props.text}</ButtonText>
    </Button>
  );
};

export default FilterButton;
