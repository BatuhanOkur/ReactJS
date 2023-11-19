import './App.css'
import {Routes,Route} from 'react-router-dom';
import Main from './components/Main.jsx'
import Portal from './components/Portal.jsx'
function App() {


  return (
    <>
      <div className='App'>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/portal' element={<Portal/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
