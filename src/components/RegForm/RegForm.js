import styles from './RegForm.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../store/auth';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const ariaLabel = { 'aria-label': 'description' };

export default function RegForm() {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.registration({ name, email, password }));
    setName('');
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
          placeholder="Name"
          inputProps={ariaLabel}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <Input
          className={styles.input}
          placeholder="Email"
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
            Sign Up
          </Button>
        </Stack>
      </Box>
      {error && <p className={styles.error}>*User already exists</p>}
    </div>
  );
}
