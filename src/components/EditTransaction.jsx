import React from 'react'

import { inputAmount, inputTransactionLabel } from '../constants/inputData'

import Form from './Form'

const EditTransaction = ({
  label,
  amount,
  toggle,
  setTransaction,
  buttonText,
}) => {
  return (
    <Form
      inputAmount={{ ...inputAmount, value: amount || '' }}
      inputTransactionLabel={{ ...inputTransactionLabel, value: label || '' }}
      hide={toggle}
      handleSubmit={setTransaction}
      buttonText={buttonText}
    />
  )
}

export default EditTransaction
