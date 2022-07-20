import './App.css';
import { Header } from './Components/HeaderSections/Header';
import {Routes, Route} from "react-router-dom"
import { HomePage } from './Components/Routes/HomePage';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={ <HomePage/> } />
      </Routes>
    </div>
  );
}

export default App;
