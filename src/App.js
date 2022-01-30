import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { authOperations } from './store/auth';
import './App.css';

const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const Contacts = lazy(() => import('./components/Contacts/Contacts'));
const MainPage = lazy(() => import('./components/MainPage/MainPage'));
const RegForm = lazy(() => import('./components/RegForm/RegForm'));
const LoginForm = lazy(() => import('./LoginForm/LoginForm'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/registration" element={<RegForm />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
