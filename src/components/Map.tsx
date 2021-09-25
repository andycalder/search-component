import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { Trail } from '../data/trail'; 
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5keWNhbGRlciIsImEiOiJjajNjN2k3NmYwMDFvMnJxdXdjdHhkdW13In0.H2GjypuSABMFMknMFp8sLg';

const MapContainer = styled.div`
  height: 100vh;
  width: 392px;
`;

interface Props {
  trail: Trail | null;
}

const Map = (props: Props) => {
  const mapContainer = useRef<null | any>(null);
  const map = useRef<null | any>(null);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      zoom: 13.5,
      center: [-122.964, 50.087],
      pitch: 75,
      bearing: 180,
      style: 'mapbox://styles/andycalder/ckq4pb5w13f0d17o83a6vghq3'
    });
  });

  useEffect(() => {
    if (!map.current) return;
    if (props.trail) {
      map.current.flyTo({
        center: props.trail.start,
        zoom: 14.5
      });
    } else {
      map.current.flyTo({
        center: [-122.964, 50.087],
        zoom: 13.5,
        bearing: 160,
        pitch: 75
      });
    }
  }, [props.trail]);

	return <MapContainer ref={mapContainer} />;
};

export default Map;
