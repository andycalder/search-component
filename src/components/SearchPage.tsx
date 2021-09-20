import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchSection from './SearchSection';
import { Trail, Difficulty } from '../data/trail';

const Container = styled.div`
  width: 100%;
  overflow: scroll;
`;

interface Props {
  query: string;
  filter: Difficulty | null;
  showTrail: (trail: Trail) => void;
}

const SearchPage = (props: Props) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://mountain-maps-api.herokuapp.com/api/v1/trails')
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
      <SearchSection name="Fitzsimmons Zone" results={results} showTrail={props.showTrail}/>
      <SearchSection name="Garbanzo Zone" results={results} showTrail={props.showTrail}/>
      <SearchSection name="Creekside Zone" results={results} showTrail={props.showTrail}/>
      <SearchSection name="Peak Zone" results={results} showTrail={props.showTrail}/>
    </Container>
  )
};

export default SearchPage;
