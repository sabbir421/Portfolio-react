
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import Contact from './Contact/Contact';
import Footer from './Components/Footer/Footer';
import BikeHunt from './Components/BikeHunt/BikeHunt';
import CameraWorld from './Components/CameraWorld/CameraWorld';
import TourGiuide from './Components/TourGuide/TourGiuide';
import LearnUp from './Components/LearnUp/LearnUp';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
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
          <Route path='/bike'>
           <BikeHunt></BikeHunt>
          </Route>
          <Route path='/camera'>
           <CameraWorld></CameraWorld>
          </Route>
          <Route path='/tour'>
           <TourGiuide></TourGiuide>
          </Route>
          <Route path='/learn'>
           <LearnUp></LearnUp>
          </Route>
          <Route path='/about'>
          <About></About>
          </Route>
          <Route path='/blog'>
          <Blog></Blog>
          </Route>


          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
