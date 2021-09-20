import styled from 'styled-components';
import beginner from '../assets/beginner.svg';
import intermediate from '../assets/intermediate.svg';
import advanced from '../assets/advanced.svg';
import expert from '../assets/expert.svg';
import proline from '../assets/proline.svg';
import { Difficulty } from '../data/trail';

const icons = {
	'Beginner': beginner,
	'Intermediate': intermediate,
	'Advanced': advanced,
	'Expert': expert,
	'Proline': proline
};

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props: {width?: number}) => props.width && `width: ${props.width}px;`}
`;

interface Props {
  difficulty: Difficulty;
  width?: number;
}

const DifficultyIcon = (props: Props) => {
	return (
		<Container width={props.width}>
			<img height="16" src={icons[props.difficulty]} alt={props.difficulty} />
		</Container>
	);
};

export default DifficultyIcon;
