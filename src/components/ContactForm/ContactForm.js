import React, { useState } from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    if (e.currentTarget.name === 'name') setName(e.currentTarget.value);
    if (e.currentTarget.name === 'number') setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      name: name,
      number: number,
    });
    setName('');
    setNumber('');
  };

  return (
    <form className={styles['contact-form']} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Liubov Murarova"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="099-999-99-99"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={styles.submit} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
