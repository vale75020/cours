import React, { Component } from 'react';
import './App.css';
import Nav from './Nav'
import Form from "./Form"
import Home from './Home'
import Cours from './Cours'
import SingleCour from './SingleCour'
import Edit from './Edit'
import {BrowserRouter  as Router,Route,Link} from 'react-router-dom'





class App extends Component {
  render() {
    return (
      <div>
     
      <Router>
      <div>
      <Nav />
      <Route path="/" exact component={Home} /> 
      <Route path="/add" exact component={Form} />
      <Route path="/cours" exact component={Cours} />
      <Route path="/cours/:id" exact component={SingleCour} />
      <Route path="/cours/edit/:id" exact component={Edit} />
      </div>
      </Router>
      </div>
    );
  }
}

export default App;
