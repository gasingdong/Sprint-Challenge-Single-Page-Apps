import React, { useEffect, useState, ReactElement } from 'react';

export default function CharacterList(): ReactElement {
  // TODO: Add useState to track data from useEffect

  useEffect((): void => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
