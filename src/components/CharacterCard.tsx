import React, { ReactElement } from 'react';
import { Card, Image } from 'semantic-ui-react';

interface CardProps {
  character: {
    name: string;
    image: string;
  };
}

export default function CharacterCard(props: CardProps): ReactElement {
  const { image, name }: { image: string; name: string } = props.character;
  return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description></Card.Description>
      </Card.Content>
    </Card>
  );
}
