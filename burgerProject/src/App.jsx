import './App.css'
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';

function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/menu' element={<Menu/>}/>
     </Routes>
    </>
    
  )
  
}

export default App
