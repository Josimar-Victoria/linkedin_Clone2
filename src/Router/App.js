import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Components/Header";
import Login from "../Components/Login";
import Home from "../Pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
