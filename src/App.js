import React, { Component } from 'react';
import './App.css';
import './header.css';
import './contact.css';
import './footer.css';
import Phonebook from './Phonebook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Phonebook/>
      </div>
    );
  }
}
export default App;
