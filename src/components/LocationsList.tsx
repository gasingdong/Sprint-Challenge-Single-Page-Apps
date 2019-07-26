import React, { useEffect, useState, ReactElement } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList(): ReactElement {
  const [locations, setLocations] = useState([]);
  const url = 'https://rickandmortyapi.com/api/location/';

  useEffect((): void => {
    async function getLocations(): Promise<void> {
      try {
        const result = await axios.get(url);
        console.log(result.data.results);
        setLocations(result.data.results);
      } catch (err) {
        console.log(err);
      }
    }

    getLocations();
  }, [url]);

  return (
    <section className="location-list grid-view">
      {locations.map(
        (location, index): ReactElement => (
          <LocationCard key={index} location={location} />
        )
      )}
    </section>
  );
}
