import styles from './HomePage.module.scss';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../store/auth';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const name = useSelector(authSelectors.getUsername);
  return (
    <div className={styles['hero']}>
      <h1 className={styles.title}>Your phonebook in the cloud</h1>
      {name ? (
        <p className={styles.description}>
          User <span className={styles['name-accent']}>{name}</span>{' '}
          successfully logged in , go to{' '}
          <NavLink className={styles.link} to="/contacts">
            Contacts
          </NavLink>
        </p>
      ) : (
        <p className={styles.description}>
          User is not authorized, go to{' '}
          <NavLink className={styles.link} to="/login">
            login page
          </NavLink>
        </p>
      )}
    </div>
  );
};

export default HomePage;
