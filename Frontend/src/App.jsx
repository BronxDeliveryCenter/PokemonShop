import { useState } from 'react'
import Products from "./components/Products"
import background from "./assets/background.png"

function App() {

  return (
    <>
  <div className="bg-red h-screen text-center flex flex-col p-10 bg-[url('./assets/background.png')]  bg-contain bg-center
" >
  <Products/>
  
  </div>
    </>
  )
}

export default App
