import React,{ useReducer } from 'react'

export const NumberContext = React.createContext();

import './App.css'
import Calculate from './Calculate';
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
      <NumberContext.Provider value={{count: count, dispatch:dispatch}}>
        <Calculate/>
      </NumberContext.Provider>
    </>
  );
}

export default App
