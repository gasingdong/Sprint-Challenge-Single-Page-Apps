import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import WelcomePage from './WelcomePage';
import LocationsList from './LocationsList';
import EpisodesList from './EpisodesList';
import SearchForm from './SearchForm';

export default function AppRouter(): ReactElement {
  return (
    <div className="page-view ui bottom attached segment active tab">
      <Switch>
        <Route path="/characters" component={CharacterList} />
        <Route path="/locations" component={LocationsList} />
        <Route path="/episodes" component={EpisodesList} />
        <Route path="/search" component={SearchForm} />
        <Route component={WelcomePage} />
        {/* <Route path="/episodes" component={} /> */}
      </Switch>
    </div>
  );
}
