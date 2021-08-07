import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  width: 392px;
  height: 48px;
  position: relative;
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  border-radius: 24px;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  outline: 0;
  padding-left: 40px;
`;

const Controls = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Results = styled.div`
  width: 500px;
  height: 500px;
  background-color: black;
`;

const Search = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <>
      <Container>
        <Controls>
          <FontAwesomeIcon 
            icon={active ? "chevron-left" : "search"}
            onClick={() => toggleActive()}
          />
        </Controls>
        <Input 
          type="search"
          placeholder="Find a trail"
          onClick={() => toggleActive()}
        />
      </Container>
      {active && (<Results></Results>)}
    </>
  );
};

export default Search;
