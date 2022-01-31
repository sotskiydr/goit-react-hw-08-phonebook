import React from 'react';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { authSelectors } from '../../store/auth';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/registration">Register</NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        )}
      </ul>
      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;
