import './App.css';
import { Header } from './Components/HeaderSections/Header';
import {Routes, Route} from "react-router-dom"
import { HomePage } from './Components/Routes/HomePage';
import { CityNews } from './Components/Routes/City';
import { Subscribe } from './Components/Routes/Subscribe';
import Signin from './Components/Routes/SignIn';
import { Footer } from "./Components/Routes/Footer"
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={ <HomePage/> } />
          <Route path='/cities' element={ <CityNews/> }/>
          <Route path='/subscribe' element={ <Subscribe/> }/>
          <Route path='/signin' element={ <Signin/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
