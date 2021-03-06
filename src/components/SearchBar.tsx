import { useState } from 'react';
import styled, { css } from 'styled-components';
import Map from './Map';
import SearchControl from './SearchControl';
import SearchPage from './SearchPage';
import FilterButton from './FilterButton';
import TrailCard from './TrailCard';
import { Difficulty, Trail } from '../data/trail';

const Controls = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 392px;
  display: flex;
  flex-direction: column;
  ${(props: {listOpen: boolean}) => props.listOpen && css`
    height: 100vh;
    background-color: rgb(33, 33, 33);
  `}
`;

const Container = styled.div`
  height: 48px;
  flex-shrink: 0;
  display: flex;
  margin: 12px;
  margin-bottom: 0;
  position: relative;
  z-index: 999;
`;

const ScrollingWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Input = styled.input`
  color: white;
  background-color: rgb(33, 33, 33);
  font-size: 16px;
  flex: 1;
  height: 100%;
  border: 1px solid rgb(89, 92, 97);
  border-radius: 24px;
  outline: 0;
  margin: 0;
  padding: 0 48px 0 48px;
`;

const SearchBar = () => {
  const [listOpen, setListOpen] = useState(false);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState<null | Difficulty>(null);
  const [trail, setTrail] = useState<null | Trail>(null);

  const reset = () => {
    setListOpen(false);
    setText('');
    setFilter(null);
    setTrail(null);
  };

  const showTrail = (trail: Trail) => {
    setListOpen(false);
    setText(trail.name);
    setTrail(trail);
  };

  const renderFilterButton = (difficulty: Difficulty) => {
    return (
      <FilterButton 
        difficulty={difficulty}
        active={difficulty === filter}
        onClick={() => setFilter(difficulty)}
      />
    );
  };

  return (
    <>
      <Map trail={trail} />
      <Controls listOpen={listOpen}>
        <Container>
          {listOpen || text ?
            <SearchControl
              position="left"
              icon="chevron-left"
              onClick={() => reset()}
            /> :
            <SearchControl
              position="left"
              icon="search"
              onClick={() => setListOpen(true)}
            />
          }
          {text.length > 0 && 
            <SearchControl 
              position="right"
              icon="times"
              onClick={() => setText('')}
            />
          }
          <Input 
            type="text"
            placeholder="Find a trail"
            value={text}
            onClick={() => setListOpen(true)}
            onInput={(e) => setText(e.currentTarget.value)}
          />
        </Container>
        <ScrollingWrapper>
          {renderFilterButton('Beginner')}
          {renderFilterButton('Intermediate')}
          {renderFilterButton('Advanced')}
          {renderFilterButton('Expert')}
          {renderFilterButton('Proline')}
        </ScrollingWrapper>
        {listOpen && <SearchPage query={text} filter={filter} showTrail={(trail: Trail) => showTrail(trail)} />}
      </Controls>
      {trail && !listOpen && <TrailCard trail={trail} />}
    </>
  );
};

export default SearchBar;
