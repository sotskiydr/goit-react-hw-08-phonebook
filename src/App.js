import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations, authSelectors } from './store/auth';
import './App.css';

const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const Contacts = lazy(() => import('./components/Contacts/Contacts'));
const MainPage = lazy(() => import('./components/MainPage/MainPage'));
const RegForm = lazy(() => import('./components/RegForm/RegForm'));
const LoginForm = lazy(() => import('./LoginForm/LoginForm'));

export default function App() {
  const dispatch = useDispatch();
  const refreshing = useSelector(authSelectors.getRefreshingStatus);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !refreshing && (
      <>
        <Suspense fallback={<p>Loading...</p>}>
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <MainPage />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="/registration"
              element={
                <PublicRoute restricted>
                  <RegForm />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginForm />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </Suspense>
      </>
    )
  );
}
