import "./index.css";
import AppNavbar from "./AppNavbar";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import PageError from "./PageError";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <AppNavbar />
    <div className="minHeight">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route component={PageError} />
      </Switch>
    </div>
    <Footer />
  </Router>
  );
}

export default App;
