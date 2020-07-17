import React from 'react'

import { useToggle } from '../costumHooks'

import { withConsumer } from '../context'
import Transaction from './Transaction'

const TransactionHistory = ({ context }) => {
  const { transactions, deleteTransaction, editTransaction } = context
  const { toggle, setToggle } = useToggle()

  return (
    <section className='history__container'>
      <h3 onClick={() => setToggle(!toggle)}>History</h3>

      {transactions && (
        <ul className={toggle ? 'hidden' : ''}>
          {transactions.map((transaction, index) => {
            return (
              <li key={transaction.label + index}>
                <Transaction
                  {...transaction}
                  deleteTransaction={deleteTransaction(index)}
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
