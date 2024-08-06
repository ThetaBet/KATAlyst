import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/Home"
import './App.css'
import NavigationBar from "./components/NavigationBar"
import { useState } from "react"

function App() {

  // convert the state to a Provider

  const [ darkMode, setDarkMode ] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode)
    setValue('changed')
  }

  return (
    <div  className="main-container">
      <BrowserRouter>
        <button onClick={handleClick} >change mode</button>
        {value}
        <NavigationBar darkMode={darkMode}/>
        <Routes>
          <Route path="" element={<HomePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
