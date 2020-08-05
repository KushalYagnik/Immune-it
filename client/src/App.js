import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Records from './components/Records/Records';
import About from './components/About/About';
import Login from './pages/Login/Login';
import Signup from './components/Signup/Signup';
import EditRecord from './components/EditRecord/EditRecord';
import ImmunizationRecord from './components/ImmunizationRecord/ImmunizationRecord';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import EditPIR from './components/ImmunizationRecord/EditPIR';
require("dotenv").config();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/pir/:id' component={EditPIR}/>
          <Route path='/view/:id' component={ImmunizationRecord} />
          <Route path='/edit/:id' component={EditRecord} />
          <Route path='/records' component={Records} />
          <Route path='/about' component={About} />
          <Route path='/home' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
