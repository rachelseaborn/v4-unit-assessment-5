// import React from 'react';
import React, { Component } from 'react';
import './App.css';

import routes from './routes';
import Nav from './Components/Nav/Nav';
import { render } from 'react-dom';

// function App() {
//   return (
//     <div className='App'></div>
//   )
// };

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
      </div>
    )
  }
}



export default App;
