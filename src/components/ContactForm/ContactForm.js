import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './ContactForm.module.scss';
import { selectors } from '../../store/contacts';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const ariaLabel = { 'aria-label': 'description' };

const ContactForm = ({ onSubmit }) => {
  const contacts = useSelector(selectors.getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(false);

  const handleChange = e => {
    if (e.currentTarget.name === 'name') setName(e.currentTarget.value);
    if (e.currentTarget.name === 'number') setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    for (const contact of contacts) {
      if (contact.name === name) {
        setError(true);
        setName('');
        setNumber('');
        return;
      }
    }

    onSubmit({
      name: name,
      number: number,
    });
    setName('');
    setNumber('');
    setError(false);
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
          type="text"
          name="name"
          placeholder="Liubov Murarova"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          inputProps={ariaLabel}
          value={name}
          onChange={handleChange}
          required
        />
        <Input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="099-999-99-99"
          required
          value={number}
          onChange={handleChange}
          inputProps={ariaLabel}
        />

        <Stack direction="row" spacing={2}>
          <Button
            className={styles.btn}
            variant="contained"
            type="submit"
            color="success"
          >
            Add contact
          </Button>
        </Stack>
      </Box>
      {error && <p className={styles.error}>*Contact already exists</p>}
    </div>
  );
};

export default ContactForm;
