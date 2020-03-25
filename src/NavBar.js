import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Icon } from './components';
import * as ROUTES from './routes';

function NavbarItem({ title, icon, to }) {
  return (
    <li className="tab-links">
      <NavLink to={to}>
        <Icon size="small" icon={icon} />
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

NavbarItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  to: PropTypes.string.isRequired,
};

export default function NavBar() {
  return (
    <div className="tabs is-centered">
      <ul>
        {Object.values(ROUTES).map(({ path: to, icon, title }) => (
          <NavbarItem to={to} icon={icon} title={title} key={to} />
        ))}
      </ul>
    </div>
  );
}
