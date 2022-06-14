import './App.css';
import allContacts from "./contacts.json";
import { useState } from 'react';

const firstFive = allContacts.slice(0, 5);

function test() {
  return "hi!"
}

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
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => {
            return (
              <tr>
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
    </div>
  );
}

export default App;
