import React, { ReactElement } from 'react';
import { Tab, Menu, Icon } from 'semantic-ui-react';
import { NavLink, NavLinkProps } from 'react-router-dom';

// TODO: Add missing tabs below

const Nav: React.FC<NavLinkProps> = (props): ReactElement => (
  <NavLink exact {...props} activeClassName="active" />
);

const createLabel = (
  iconName: 'home' | 'users' | 'location arrow',
  labelText: string
): ReactElement => (
  <span>
    <Icon name={iconName} />
    {labelText}
  </span>
);

const welcomeLabel = createLabel('home', 'Home Page');
const characterLabel = createLabel('users', 'Characters');
const locationLabel = createLabel('location arrow', 'Locations');

const panes = [
  {
    menuItem: <Menu.Item key="home" as={Nav} to={`/`} content={welcomeLabel} />,
  },
  {
    menuItem: (
      <Menu.Item
        key="characters"
        as={Nav}
        to={`/characters`}
        content={characterLabel}
      />
    ),
  },
  {
    menuItem: (
      <Menu.Item
        key="locations"
        as={Nav}
        to={`/locations`}
        content={locationLabel}
      />
    ),
  },
];

const TabNav = (): ReactElement => (
  <Tab panes={panes} renderActiveOnly={false} />
);

export default TabNav;
