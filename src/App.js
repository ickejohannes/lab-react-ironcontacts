import './App.css';
import allContacts from "./contacts.json";
import { useState } from 'react';

const firstFive = allContacts.slice(0, 5);

function App() {
  const [contacts, setContacts] = useState(firstFive);
  const difference = allContacts.filter(x => !contacts.includes(x));
  const randomContact = difference[Math.floor(Math.random() * difference.length)]
    
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
                {contact.wonOscar && <td>🏆</td>}
                {contact.wonEmmy && <td>🏆</td>}
              </tr>
            )
          })}
        </tbody>
      </table>
      <button type="button" onClick={() => setContacts([...contacts, randomContact])}>Add Random Contact</button>
    </div>
  );
}

export default App;
