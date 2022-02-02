import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../store/auth';
import styles from './UserMenu.module.scss';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={styles['user-menu']}>
      <span className={styles.name}>
        Welcome, <span className={styles['name-accent']}>{name}</span> !
      </span>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Exit
      </button>
    </div>
  );
}
