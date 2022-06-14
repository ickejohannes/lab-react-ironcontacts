import './App.css';
import allContacts from "./contacts.json";
import { useState } from 'react';

const firstFive = allContacts.slice(0, 5);

function App() {
  const [contacts, setContacts] = useState(firstFive);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => {
            return (
              <tr>
                <td><img src={contact.pictureUrl} alt={contact.name} className="actorPic"/></td>
                <td>{contact.name}</td> 
                <td>{contact.popularity}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
