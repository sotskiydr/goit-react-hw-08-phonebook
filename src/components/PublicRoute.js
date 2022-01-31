import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../store/auth';

export default function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;
  return shouldNavigate ? <Navigate to="/" /> : children;
}
