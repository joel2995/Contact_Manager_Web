import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {

  const contacts =[{id: "1" , "name": "Joel", "email": "joel@gmail.com"}
    , {id: "2" , "name": "John", "email": "john@gmail.com"}
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList />
      
    </div>
  );
}

export default App;
