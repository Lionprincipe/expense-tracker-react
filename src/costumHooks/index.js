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

  const editTransaction = (index) => (transaction) => {
    if (transaction) {
      const label = transaction.label || transactions[index].label
      const amount = transaction.amount || transactions[index].amount
      setTransactions([
        ...transactions.slice(0, index),
        { label, amount },
        ...transactions.slice(index + 1),
      ])
    }
  }

  const deleteTransaction = (index) => () => {
    if (index > -1 && index < transactions.length) {
      setTransactions([
        ...transactions.slice(0, index),
        ...transactions.slice(index + 1),
      ])
    }
  }

  const addTransaction = (transaction) =>
    setTransactions([...transactions, transaction])

  return {
    transactions,
    setTransactions,
    addTransaction,
    deleteTransaction,
    editTransaction,
    ...getTotalExpenseAndIncome(transactions),
  }
}

function getTotalExpenseAndIncome(transactions) {
  return transactions.reduce(
    ({ income, expense, total }, { amount }) => {
      return {
        income: amount > 0 ? income + amount : income,
        expense: amount < 0 ? expense + amount : expense,
        total: total + amount,
      }
    },
    { income: 0, expense: 0, total: 0 }
  )
}
