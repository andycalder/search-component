import styled from 'styled-components';
import DifficultyIcon from './DifficultyIcon';
import { Trail } from '../data/trail';

const Container = styled.div`
  width: 392px;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const Card = styled.div`
  flex: 1;
  margin: 12px;
  padding: 12px;
	background-color: rgb(33, 33, 33);
  border-radius: 5px;
  font-size: 1.4rem;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  display: flex;
`;

const Details = styled.div`
  font-size: 1.2rem;
  color: grey;
  margin-left: 40px;
`;

interface Props {
  trail: Trail;
}

const TrailCard = (props: Props) => {
  return (
    <Container>
      <Card>
        <Name>
          <DifficultyIcon width={40} difficulty={props.trail.difficulty} />
          {props.trail.name}
        </Name>
        <Details>
          {`${props.trail.difficulty} - ${props.trail.category}`}
        </Details>
      </Card>
    </Container>
  );
}

export default TrailCard;
