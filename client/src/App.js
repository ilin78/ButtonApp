import React, {Component} from 'react';
import { Route } from "react-router-dom";
import { Home } from './pages';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Route exact path="/home" component={Home}></Route>
      </div>
    )
  }   
}

export default App;