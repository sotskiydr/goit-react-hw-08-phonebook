import React from 'react';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { authSelectors } from '../../store/auth';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            className={navData =>
              navData.isActive ? styles.active : styles.link
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li className={styles.item}>
              <NavLink
                className={navData =>
                  navData.isActive ? styles.active : styles.link
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                className={navData =>
                  navData.isActive ? styles.active : styles.link
                }
                to="/registration"
              >
                Register
              </NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li className={styles.item}>
            <NavLink
              className={navData =>
                navData.isActive ? styles.active : styles.link
              }
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
      {isLoggedIn && <UserMenu />}
    </div>
  );
};

export default Navigation;
