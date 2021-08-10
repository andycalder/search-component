import { useState } from 'react';
import styled from 'styled-components';
import SearchControl from './SearchControl';
import SearchPage from './SearchPage';

const Controls = styled.div`
  width: 392px;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 48px;
  flex-shrink: 0;
  margin: 8px;
  position: relative;
  z-index: 999;
`;

const Input = styled.input`
  font-size: 16px;
  width: calc(100% - 96px);
  height: 100%;
  border: 0;
  border-radius: 24px;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  outline: 0;
  padding: 0 48px 0 48px;
`;

const SearchBar = () => {
  const [active, setActive] = useState(false);
  const [text, setText] = useState('');

  const exitSearch = () => {
    setActive(false);
    setText('');
  };

  return (
    <Controls>
      <Container>
        {active ?
          <SearchControl
            position="left"
            icon="chevron-left"
            onClick={() => exitSearch()}
          /> :
          <SearchControl
            position="left"
            icon="search"
            onClick={() => setActive(true)}
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
          onClick={() => setActive(true)}
          onInput={(e) => setText(e.currentTarget.value)}
        />
      </Container>
      {active && <SearchPage />}
    </Controls>
  );
};

export default SearchBar;
