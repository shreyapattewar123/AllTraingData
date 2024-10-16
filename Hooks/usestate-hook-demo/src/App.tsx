import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'
import ContextComponent from './components/ContextComponent'
import TextInputWithFocusButton from './components/TextInputWithFocusButton'
import Counter from './components/Counter'
import Fibonacci from './components/Fibonacci'
import Counter1 from './components/Counter1'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Timer/> */}
        <ContextComponent/>
        <TextInputWithFocusButton/>
        <Counter/>
        <Fibonacci/>
        <Counter1/>     
         </div>
     </>
  )
}

export default App
