import React, { useState, ReactElement, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function SearchForm(): ReactElement {
  const [name, setName] = useLocalStorage('search', '');
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const queryUrl = `https://rickandmortyapi.com/api/character/?name=${search}`;
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setName(event.target.value);
  };

  const onSearch = (
    event: React.FormEvent<HTMLFormElement>,
    name: string
  ): void => {
    event.preventDefault();
    setSearch(name);
  };

  useEffect((): (() => void) => {
    let isMounted = true;
    async function getResults(): Promise<void> {
      const results = await axios.get(queryUrl);

      if (isMounted) {
        setResults(results.data.results);
      }
    }

    search ? getResults() : setResults([]);
    return (): void => {
      isMounted = false;
    };
  }, [search, queryUrl]);

  return (
    <div>
      <section className="search-form">
        <form onSubmit={(event): void => onSearch(event, name)}>
          <input
            onChange={handleInputChange}
            placeholder="name"
            value={name}
            name="name"
          />
          <button type="submit">Search</button>
        </form>
      </section>
      <section className="character-list grid-view">
        {results.map(
          (character, index): ReactElement => (
            <CharacterCard key={index} character={character} />
          )
        )}
      </section>
    </div>
  );
}
