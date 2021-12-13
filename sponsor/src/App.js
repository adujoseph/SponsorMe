import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import Home from "./components/Home/index";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />

          {/*  <Route path="/test" component={AcceptWager} />*/}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
