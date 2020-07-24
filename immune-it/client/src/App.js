import React from 'react';
// import logo from './Immune-It.png';
import './App.css';
// import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
// import {BrowserRouter as Router, Route, Switch, BrowserRouter} from 'react-router-dom';
// import Signup from './components/Signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Home />
      {/* <BrowserRouter>
        <Switch>
          <Route path="/signup" component={Signup}/>
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
