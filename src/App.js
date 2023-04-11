import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Coins from './Components/Coins'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Coin from './Routes/Coin'

function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
      )
      .then((response) => {
        setCoins(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Coins coins={coins} />} />
          <Route path='/coin' element={<Coin />} />
          <Route path='coin/:coinId' element={<Coin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
