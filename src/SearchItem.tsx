import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export class Trail {
  name!: string;
  difficulty!: 'beginner' | 'intermediate' | 'advanced' | 'expert' | 'proline';
  type!: 'technical' | 'freeride';
  zone!: 'Fitzsimmons Zone' | 'Garbanzo Zone' | 'Creekside Zone' | 'Peak Zone';
}

const icons = {
  beginner: {
    icon: 'circle',
    color: 'green'
  },
  intermediate: {
    icon: 'square',
    color: 'blue'
  },
  advanced: {
    icon: 'square',
    color: 'black'
  },
  expert: {
    icon: 'square',
    color: 'black'
  },
  proline: {
    icon: 'square',
    color: 'red'
  }
};

const ListItem = styled.li`
  width: 100%;
  height: 45px;
  display: flex;
  background-color: lightgrey;
`;

const Name = styled.div`
  line-height: 45px;
  flex-grow: 1;
  border-bottom: 1px solid gray;
`;

const Icon = styled.div`
  width: 60px;
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
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon 
            icon={['fas', icons[props.trail.difficulty].icon] as IconProp}
            color={icons[props.trail.difficulty].color}
            size="lg"
          />
          <FontAwesomeIcon 
            icon={['far', icons[props.trail.difficulty].icon] as IconProp}
            color="white"
            size="lg"
          />
        </span>
      </Icon>
      <Name>
        {props.trail.name}
      </Name>
    </ListItem>
  );
}

export default SearchItem;
