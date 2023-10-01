import './App.css'
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/menu' exact element={<Menu/>}/>
      </Routes>
    </>
    
  )
  
}

export default App
