import {React, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/App.css'


// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'
import SuperMarket from './Components/SuperMarket/SuperMarket'


const App = () => {
  const [cash, setCash] = useState(100)

  const handleExchange = (amt) => {
    if (cash - amt > 0) setCash((cash - amt).toFixed(2))
  }
  return (
    <main>
      <Nav cash={cash} setCash={setCash} />
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/burgers' element={<BurgerShop />}/>
        <Route path='/market' element={<SuperMarket handleExchange={handleExchange}/>}/>
      </Routes>
    
    </main>
    
  )
}

export default App