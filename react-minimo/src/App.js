import './App.css';
import bg from "./main_page.png"
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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

            <Redirect exact from="/" to="/homePage" /> {/* Редирект на страницу профиля по умолчанию при заходе на сайт */}
            <Redirect exact from="/First-React-project" to="/homePage" /> {/* Редирект на страницу профиля по умолчанию при заходе на сайт */}
            <Route path="*" render={() => <div>404 СТРАНИЦА НЕ НАЙДЕНА</div>} />
          </Switch>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
