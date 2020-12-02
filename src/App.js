import './App.css';

import React, {useState} from 'react';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Navbar/Sidebar/Sidebar'

import Game from './pages/Game'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <Switch>
          <Route path="/" exact component={Game} />
          {/* <Route path='/about-us' exact component={About} />
          <Route path='/play-quiz' exact component={SelectQuiz} /> */}
        </Switch>
      </Router>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
