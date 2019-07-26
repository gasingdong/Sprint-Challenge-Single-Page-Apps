import React, { useEffect, useState, ReactElement } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList(): ReactElement {
  const [characters, setCharacters] = useState([]);
  const url = 'https://rickandmortyapi.com/api/character/';

  useEffect((): (() => void) => {
    let isMounted = true;
    async function getCharacters(): Promise<void> {
      try {
        const result = await axios.get(url);

        if (isMounted) {
          setCharacters(result.data.results);
        }
      } catch (err) {
        console.log(err);
      }
    }

    getCharacters();
    return (): void => {
      isMounted = false;
    };
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
