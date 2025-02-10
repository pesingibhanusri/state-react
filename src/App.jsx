import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Tasks/counter'
import Typed from './Tasks/Typed'

import Toggle from './Tasks/Toggle'
import ADDITEMS from './Tasks/Additems'

function App() {
  const [count, setCount] = useState(0)

  return (
<><Counter></Counter>
<Typed></Typed>
<ADDITEMS></ADDITEMS>
<Toggle></Toggle></>

  )
}

export default App
