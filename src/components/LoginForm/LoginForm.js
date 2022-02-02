import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../store/auth';

import styles from './LoginForm.module.scss';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const ariaLabel = { 'aria-label': 'description' };

export default function LoginForm() {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.formContainer}>
      <Box
        className={styles.form}
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        autoComplete="off"
      >
        <Input
          className={styles.input}
          placeholder="Login"
          inputProps={ariaLabel}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <Input
          className={styles.input}
          placeholder="Password"
          inputProps={ariaLabel}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <Stack direction="row" spacing={2}>
          <Button
            className={styles.btn}
            variant="contained"
            type="submit"
            color="success"
          >
            Sign In
          </Button>
        </Stack>
      </Box>
      {error && <p className={styles.error}>*Incorrect login or password</p>}
    </div>
  );
}
