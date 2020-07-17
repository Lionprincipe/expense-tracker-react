import React from 'react'

import { useToggle } from '../costumHooks'

import { withConsumer } from '../context'
import Transaction from './Transaction'

const TransactionHistory = ({ context }) => {
  const { transactions, setTransactions } = context
  const { toggle, setToggle } = useToggle()

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

  const removeTransaction = (index) => () => {
    if (index > -1 && index < transactions.length) {
      setTransactions([
        ...transactions.slice(0, index),
        ...transactions.slice(index + 1),
      ])
    }
  }

  return (
    <section className='history__container'>
      <h3 onClick={() => setToggle(!toggle)}>History</h3>

      {context && (
        <ul className={toggle ? 'hidden' : ''}>
          {context.transactions.map((transaction, index) => {
            return (
              <li key={transaction.label + index}>
                <Transaction
                  {...transaction}
                  removeTransaction={removeTransaction(index)}
                  editTransaction={editTransaction(index)}
                />
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export default withConsumer(TransactionHistory)
