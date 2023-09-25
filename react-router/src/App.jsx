import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import WrongPath from './components/WrongPath'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<WrongPath/>} />
      </Routes>
    </>
  )
}

export default App
