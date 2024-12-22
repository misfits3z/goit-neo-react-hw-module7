import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import { selectContacts } from './redux/contactSlice';
import { fetchContacts } from './redux/contactsOps';
import './App.css';

function App() {
  const dispatch = useDispatch();

  // Селектори
  const contacts = useSelector(selectContacts);
  const error = useSelector((state) => state.contacts.error);
  const isLoading = useSelector((state) => state.contacts.isLoading); 

  // Завантаження контактів при першому рендері
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {isLoading && !error && <p>Loading...</p>}
      {!isLoading && !error && (
        <>
          <ContactForm />
          {contacts.length > 0 && <SearchBox />}
          <ContactList />
        </>
      )}
    </div>
  );
}


export default App;
