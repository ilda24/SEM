import React, { Component } from 'react';
import Main from "./components/main.jsx";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <Route exact path="/" component={Main} />
          
        </div>
      </Router>
    );
  }
}

export default App;
