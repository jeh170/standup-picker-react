import './App.css';
import DeveloperForm from './ui/DeveloperForm.js'
import DeveloperCard from './ui/developers/DeveloperCard.js'
import React from 'react';

class App extends React.Component {  
  render() {
    return (
      <div className='container'>
        <DeveloperForm/>
        <DeveloperCard/>
      </div>
    );
  }
}

export default App;
