import './App.css';
import allContacts from "./contacts.json";
import { useState } from 'react';

const firstFive = allContacts.slice(0, 5);

function App() {
  const [contacts, setContacts] = useState(firstFive);
  const difference = allContacts.filter(x => !contacts.includes(x));
  const randomContact = difference[Math.floor(Math.random() * difference.length)]
  
  const deleteContact = contactId => {
    const filteredContacts = contacts.filter(contact => {
      return contact.id !== contactId;
    });
  
    setContacts(filteredContacts);
  }
    
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => {
            return (
              <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name} className="actorPic"/></td>
                <td>{contact.name}</td> 
                <td>{contact.popularity}</td>
                {contact.wonOscar ? <td>🏆</td> : <td></td>}
                {contact.wonEmmy ? <td>🏆</td> : <td></td>}
                <td><button type="button" onClick={() => deleteContact(contact.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button type="button" onClick={() => setContacts([...contacts, randomContact])}>Add Random Contact</button>
      <button type="button" onClick={() => setContacts([...contacts.sort((a, b) => a.name.localeCompare(b.name))])}>Sort by name</button>
      <button type="button" onClick={() => setContacts([...contacts.sort((a, b) => a.popularity - b.popularity)])}>Sort by popularity</button>

    </div>
  );
}

export default App;
