import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import WrongPath from './components/WrongPath'
import History from './components/History'
import OurCompanies from './components/OurCompanies'
import Team from './components/Team'
import Users from './components/Users'
import UserDetails from './components/UserDetails'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/history' element={<History/>}>
          <Route path='our-companies' element={<OurCompanies/>}/>
          <Route path='team' element={<Team/>}/>
        </Route>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:userId' element={<UserDetails/>}/>
        <Route path='*' element={<WrongPath/>} />
      </Routes>
    </>
  )
}

export default App
