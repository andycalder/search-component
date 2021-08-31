import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchSection from './SearchSection';
import { Trail, Difficulty } from '../data/trail';

const Container = styled.div`
  width: 100%;
  overflow: scroll;
  background-color: #1a1d21;
`;

interface Props {
  query: string;
  filter: Difficulty | null;
}

const SearchPage = (props: Props) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/trails')
      .then(response => response.json())
      .then(data => data.trails)
      .then(trails => setItems(trails.map(Trail.new)));
  }, []);

  let results = items.filter(trail => {
    const regex = new RegExp(props.query, 'i');
    return regex.test(trail.name);
  });

  if (props.filter) {
    results = results.filter(trail => trail.difficulty === props.filter);
  }

  return (
    <Container>
      <SearchSection name="Fitzsimmons Zone" results={results}/>
      <SearchSection name="Garbanzo Zone" results={results}/>
      <SearchSection name="Creekside Zone" results={results}/>
      <SearchSection name="Peak Zone" results={results}/>
    </Container>
  )
};

export default SearchPage;
