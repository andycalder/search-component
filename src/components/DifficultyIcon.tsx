import beginner from '../assets/beginner.svg';
import intermediate from '../assets/intermediate.svg';
import advanced from '../assets/advanced.svg';
import expert from '../assets/expert.svg';
import proline from '../assets/proline.svg';
import { Difficulty } from '../data/trail';

const icons = {
	beginner: beginner,
	intermediate: intermediate,
	advanced: advanced,
	expert: expert,
	proline: proline
};

interface Props {
  difficulty: Difficulty;
}

const DifficultyIcon = (props: Props) => {
	return (<img height="16" src={icons[props.difficulty]} alt={props.difficulty} />);
};

export default DifficultyIcon;
