import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {UserForm} from './components/UserForm'

class App extends Component {

  render() {
    return (
        <div className="App">
          <div className="col-xs-12 col-md-8 col-md-offset-2 well">
            <p className="resume-header">OMD Editing Resume Builder</p>
            <UserForm />
          </div>
        </div>
    );
  }
}
export default App;
