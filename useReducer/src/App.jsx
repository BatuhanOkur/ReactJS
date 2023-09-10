import { useReducer } from 'react'

import './App.css'
const initialValue = 0;

const reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialValue;
    default:
      return state;

  }
}

function App() {
  
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <span>Sayı : {count}</span>
      <button onClick={() =>{dispatch('increment')}}>Arttır</button>
      <button onClick={() =>{dispatch('decrement')}}>Azalt</button>
      <button onClick={() =>{dispatch('reset')}}>Sıfırla</button>
    </>
  )
}

export default App
