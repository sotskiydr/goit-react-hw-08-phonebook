import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../store/contacts';
import Input from '@mui/material/Input';
import styles from './Filter.module.scss';
const ariaLabel = { 'aria-label': 'description' };

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <div className={styles.filter}>
      <Input
        className={styles.input}
        inputProps={ariaLabel}
        type="text"
        placeholder="Find contact"
        value={filter}
        onChange={e => {
          dispatch(actions.filterContacts(e.target.value));
        }}
      />
    </div>
  );
};

export default Filter;
