import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Route,Switch}from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import {Button} from 'semantic-ui-react';
import CreateRoom from './Containers/CreateRoom/CreateRoom';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path = {'/'} exact render  = { (Routprops) => <HomePage {...Routprops} />} />
          {/* <Route path = {'/CreateRoom/'} exact render  = { (Routprops) => <CreateRoom {...Routprops} />} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
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
