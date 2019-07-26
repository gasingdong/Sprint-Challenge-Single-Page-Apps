import React, { useEffect, useState, ReactElement } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList(): ReactElement {
  const [characters, setCharacters] = useState([]);
  const url = 'https://rickandmortyapi.com/api/character/';

  useEffect((): void => {
    async function getCharacters(): Promise<void> {
      try {
        const result = await axios.get(url);
        console.log(result.data.results);
        setCharacters(result.data.results);
      } catch (err) {
        console.log(err);
      }
    }

    getCharacters();
  }, [url]);

  return (
    <section className="character-list grid-view">
      {characters.map(
        (character, index): ReactElement => (
          <CharacterCard key={index} character={character} />
        )
      )}
    </section>
  );
}
