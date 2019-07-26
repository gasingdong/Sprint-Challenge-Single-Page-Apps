import React, { useEffect, useState, ReactElement } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodesList(): ReactElement {
  const [episodes, setEpisodes] = useState([]);
  const url = 'https://rickandmortyapi.com/api/episode/';

  useEffect((): void => {
    async function getEpisodes(): Promise<void> {
      try {
        const result = await axios.get(url);
        console.log(result.data.results);
        setEpisodes(result.data.results);
      } catch (err) {
        console.log(err);
      }
    }

    getEpisodes();
  }, [url]);

  return (
    <section className="episode-list grid-view">
      {episodes.map(
        (episode, index): ReactElement => (
          <EpisodeCard key={index} episode={episode} />
        )
      )}
    </section>
  );
}
