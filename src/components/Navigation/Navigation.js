import React from 'react';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { authSelectors } from '../../store/auth';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const name = useSelector(authSelectors.getUsername);
  return (
    <>
      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/registration">Register</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
      {name && <UserMenu />}
    </>
  );
};

export default Navigation;
