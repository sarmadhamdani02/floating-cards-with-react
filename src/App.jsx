import React from 'react'
import Background from "./Components/Background"
import Foreground from "./Components/Foreground"

const App = () => {
  return (
    <div className=' realtive w-full h-screen bg-zinc-700 text-white '>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App