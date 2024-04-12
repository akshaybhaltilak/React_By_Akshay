import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setcounter] = useState(0)
 
 const addValue = () => {
 
  if(counter < 20){
    counter = counter + 1;
    setcounter(counter)
  }


 }

  
 const removeValue = () => {
  if(counter > 0){
    counter = counter - 1;
    setcounter(counter)
  }

 }

  return (
    <>
     <h1>Akshay is learning React </h1>
     <h2>Counter : {counter}</h2>
     
     <button onClick={addValue}>Add Value</button> <br />
     <button onClick={removeValue}>Remove</button>

    </>
  )
}

export default App
