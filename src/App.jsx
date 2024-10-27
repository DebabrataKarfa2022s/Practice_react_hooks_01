import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseReducerHook from './hooks/UseReducerHook'
import { AppProvider } from './hooks/UseContextHook'
import UseRef from './hooks/UseRef'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>

   <UseReducerHook/>
   {/* <UseRef/> */}
   
   </>
  )
}

export default App
