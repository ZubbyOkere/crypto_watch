import React from 'react'
import CoinItem from './CoinItem'
import './Coins.css'
import { Link } from 'react-router-dom'
import Coin from '../Routes/Coin'

const Coins = ({ coins }) => {
  return (
    <div className='container'>
      <div>
        <div className='heading'>
          <p>#</p>
          <p>coin</p>
          <p>price</p>
          <p>24h</p>
          <p>volume</p>
          <p>market cap</p>
        </div>
      </div>

      {coins &&
        coins.map((coin) => {
          return (
            <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
              <CoinItem coin={coin} />
            </Link>
          )
        })}
    </div>
  )
}

export default Coins
