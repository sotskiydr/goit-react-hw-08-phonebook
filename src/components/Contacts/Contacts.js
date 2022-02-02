import ContactForm from '../ContactForm/ContactForm';
import styles from './Contacts.module.scss';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactList/ContactsList';
import { useDispatch } from 'react-redux';
import { operations } from '../../store/contacts';

const Contacts = () => {
  const dispatch = useDispatch();
  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <ContactForm
          onSubmit={(name, number) =>
            dispatch(operations.addContact(name, number))
          }
        />
      </div>
      <div className={styles.search}>
        <Filter />
        <ContactsList />
      </div>
    </main>
  );
};
export default Contacts;
