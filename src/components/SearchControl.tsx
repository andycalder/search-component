import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Position {
  position: 'left' | 'right';
}

interface Props {
  position: 'left' | 'right';
  icon: IconProp;
  onClick: () => void;
}

const Container = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  ${(props: Position) => props.position}: 0;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: white;
`;

const SearchControl = (props: Props) => {
  return (
    <Container
      position={props.position}
      onClick={() => props.onClick()}
    >
      <FontAwesomeIcon icon={props.icon} />
    </Container>
  );
};

export default SearchControl;
