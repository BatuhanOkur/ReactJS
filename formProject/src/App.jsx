import './App.css'
import {Routes,Route} from 'react-router-dom';
import Main from './components/Main.jsx'
import Portal from './components/Portal.jsx'
function App() {


  return (
    <>
      <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/portal' element={<Portal/>} />
      </Routes>
    </>
  )
}

export default App
