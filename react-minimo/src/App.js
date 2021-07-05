import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        
        <div className="app-wrapper-content">
          Основной Контент
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
