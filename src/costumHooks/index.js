import { useState } from 'react'
import initialState from '../constants/initialState'

export const useToggle = () => {
  const [toggle, setToggle] = useState(false)
  return { toggle, setToggle: () => setToggle(!toggle) }
}

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([
    ...initialState.transactions,
  ])
  return { transactions, setTransactions }
}
