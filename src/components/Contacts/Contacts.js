import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactList/ContactsList';
import { useDispatch } from 'react-redux';
import { operations } from '../../store/contacts';

const Contacts = () => {
  const dispatch = useDispatch();
  return (
    <main className="main">
      <h1 className="title">Phonebook</h1>
      <ContactForm
        onSubmit={(name, number) =>
          dispatch(operations.addContact(name, number))
        }
      />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactsList />
    </main>
  );
};
export default Contacts;
