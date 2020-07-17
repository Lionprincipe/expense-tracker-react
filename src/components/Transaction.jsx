import React from 'react'
import EditTransaction from './EditTransaction'
import { useToggle } from '../costumHooks'
import Button from './Button'

const Transaction = ({ deleteTransaction, label, amount, editTransaction }) => {
  const { toggle, setToggle } = useToggle()
  const onDelete = (e) => {
    e.stopPropagation()
    deleteTransaction()
  }
  return (
    <div>
      <div
        className={`history__records ${
          amount > 0 ? 'history__records__income' : 'history__records__expense'
        }
       `}
        onClick={setToggle}
      >
        <Button onClick={onDelete}></Button>
        <span>{label || ''}</span>
        <span className='history_records__summary'>{amount || 0}</span>
      </div>
      <div>
        <EditTransaction
          setTransaction={editTransaction}
          toggle={!toggle}
          amount={amount}
          label={label}
          buttonText='Edit Transaction'
        />
      </div>
    </div>
  )
}

export default Transaction
