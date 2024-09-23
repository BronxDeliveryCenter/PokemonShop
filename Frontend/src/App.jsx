import { useState } from 'react'
import Products from "./components/Products"
import background from "./assets/background.png"
import SignUp from "./components/Signup"
import Admin from "./components/Admin"
import Home from "./componenta/Home.jsx"
import "./App.css"

function App() {
 
  return (
    <>
      <SignUp/>
      <Home />
      <Admin/>
      <Products/>
    </>
  )
}

export default App;
