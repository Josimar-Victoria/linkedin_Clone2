import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from '../Components/Login';
import Home from '../Pages/Home';
import Header from '../Components/Header';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
