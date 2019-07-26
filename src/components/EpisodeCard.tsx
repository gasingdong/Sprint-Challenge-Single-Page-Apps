import React, { ReactElement } from 'react';
import { Card } from 'semantic-ui-react';

interface CardProps {
  episode: {
    name: string;
    air_date: string;
    episode: string;
  };
}

export default function EpisodeCard(props: CardProps): ReactElement {
  const {
    name,
    air_date,
    episode,
  }: { name: string; air_date: string; episode: string } = props.episode;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{episode}</Card.Meta>
        <Card.Meta>{air_date}</Card.Meta>
        <Card.Description></Card.Description>
      </Card.Content>
    </Card>
  );
}
