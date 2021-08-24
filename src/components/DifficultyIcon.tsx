import beginner from '../assets/beginner.svg';
import intermediate from '../assets/intermediate.svg';
import advanced from '../assets/advanced.svg';
import proline from '../assets/proline.svg';
import { Difficulty } from '../data/trail';

const icons = {
	beginner: beginner,
	intermediate: intermediate,
	advanced: advanced,
	expert: advanced,
	proline: proline
};

interface Props {
  difficulty: Difficulty;
}

const DifficultyIcon = (props: Props) => {
	return (<img width="16" src={icons[props.difficulty]} alt={props.difficulty} />);
};

export default DifficultyIcon;
