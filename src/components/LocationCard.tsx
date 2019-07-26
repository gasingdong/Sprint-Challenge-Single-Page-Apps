import React, { ReactElement } from 'react';
import { Card } from 'semantic-ui-react';

interface CardProps {
  location: {
    name: string;
    type: string;
    dimension: string;
  };
}

export default function LocationCard(props: CardProps): ReactElement {
  const {
    name,
    type,
    dimension,
  }: { name: string; type: string; dimension: string } = props.location;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{type}</Card.Meta>
        <Card.Meta>{dimension}</Card.Meta>
        <Card.Description></Card.Description>
      </Card.Content>
    </Card>
  );
}
