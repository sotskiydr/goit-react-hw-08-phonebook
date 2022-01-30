import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './ContactList.module.scss';
import { operations, selectors } from '../../store/contacts';
const ContactsList = () => {
  const dispatch = useDispatch();
  const contactsData = useSelector(selectors.getContacts);
  const token = useSelector(selectors.getToken);
  useEffect(() => dispatch(operations.fetchContacts(token)), [dispatch, token]);

  const items = useSelector(({ contacts }) => {
    const toLowerCaseFilter = contacts.filter.toLowerCase();
    const items = contactsData.filter(el =>
      el.name.toLowerCase().includes(toLowerCaseFilter),
    );
    return items;
  });

  return (
    <ul className={styles.list}>
      {items.map(el => {
        return (
          <li className={styles.item} key={el.id}>
            <span className={styles.span}>
              {el.name}: {el.number}
            </span>
            <button
              className={styles.btn}
              type="button"
              id={el.id}
              onClick={() => {
                dispatch(operations.deleteContact(el.id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
