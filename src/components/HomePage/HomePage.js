import { useSelector } from 'react-redux';
import { authSelectors } from '../../store/auth';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const name = useSelector(authSelectors.getUsername);
  return (
    <>
      <h1>Your phonebook in the cloud</h1>
      {name ? (
        <p>User {name} successfully logged in</p>
      ) : (
        <p>
          User is not authorized, go to{' '}
          <NavLink to="/login">login page</NavLink>
        </p>
      )}
    </>
  );
};

export default HomePage;
