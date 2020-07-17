import React from 'react'

import { useToggle } from '../costumHooks'
import { withConsumer } from '../context'

import EditTransaction from './EditTransaction'

const AddTransaction = ({ context }) => {
  const { toggle, setToggle } = useToggle()
  const { addTransaction } = context

  return (
    <section className='summary__container'>
      <h3 onClick={setToggle}> Add new transaction </h3>
      <EditTransaction
        toggle={!toggle}
        setTransaction={addTransaction}
        buttonText='Add Transaction'
      />
    </section>
  )
}

export default withConsumer(AddTransaction)
