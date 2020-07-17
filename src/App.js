import React from 'react'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionHistory from './components/TransactionHistory'

import AddTransaction from './components/AddTransaction'

function App() {
  return (
    <div className='app__wrapper'>
      <Header />
      <div className='sections__container'>
        <Balance />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </div>
  )
}

export default App
