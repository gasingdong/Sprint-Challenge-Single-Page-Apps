import React, { useState, ReactElement } from 'react';

export default function SearchForm({
  onSearch,
}: {
  onSearch: (query: { name: string }) => void;
}): ReactElement {
  const [query, setQuery] = useState({
    name: '',
  });
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setQuery({ ...query, name: event.target.value });
  };

  return (
    <section className="search-form">
      <form onSubmit={(): void => onSearch(query)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
