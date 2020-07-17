import React from 'react'
import EditTransaction from './EditTransaction'
import { useToggle } from '../costumHooks'
import Button from './Button'

const Transaction = ({ removeTransaction, label, amount, editTransaction }) => {
  const { toggle, setToggle } = useToggle()
  const onRemove = (e) => {
    e.stopPropagation()
    removeTransaction()
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
        <Button onClick={onRemove}></Button>
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
