import styled, { css } from 'styled-components';
import DifficultyIcon from './DifficultyIcon';
import { Difficulty } from '../data/trail';

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  font-family: inherit;
  color: white;
  border: 0;
  padding: 0 16px 0 16px;
  margin: 12px;
  margin-right: 0;
  width: fit-content;
  height: 32px;
  border: 1px solid rgb(72, 72, 72);
	border-radius: 16px;
  background-color: rgb(55,55,55);
  transition: background-color 0.25s;

  &:active {
    background-color: rgb(75, 75, 75);
  }

  ${(props: {active: boolean}) => props.active && css`
    color: rgb(55,55,55);
    border: 1px solid white;
    background-color: white;
    transition: none;
    
    &:active {
      background-color: white;
    }
  `}
`;

const ButtonText = styled.div`
  font-size: 1.4rem;
  line-height: 32px;
  margin-left: 7px;
`;

interface FilterButtonProps {
  difficulty: Difficulty;
  active: boolean;
  onClick: () => void;
}

const FilterButton = (props: FilterButtonProps) => {
  return (
    <Button 
      active={props.active}
      onClick={() => props.onClick()}
    >
      <DifficultyIcon difficulty={props.difficulty} />
      <ButtonText>{props.difficulty}</ButtonText>
    </Button>
  );
};

export default FilterButton;
