import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import Contact from './Contact/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/contact'>
           <Contact></Contact>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
