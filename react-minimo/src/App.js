import './App.css';
import bg from "./main_page.png"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import Lifestyle from './Components/Lifestyle/Lifestyle';
import Photodiary from './Components/Photodiary/Photodiary';
import Music from './Components/Music/Music';
import Travel from './Components/Travel/Travel';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <img className="bg" src={bg} alt="background"/>
        
        <div className="app-wrapper-content">
          <Switch>
            <Route path="/homePage" render={() => <HomePage /> } />
            <Route path="/lifestyle" render={() => <Lifestyle /> } />
            <Route path="/photodiary" render={() => <Photodiary /> } />
            <Route path="/music" render={() => <Music /> } />
            <Route path="/travel" render={() => <Travel /> } />
          </Switch>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
