import React, { useState } from 'react'
import InputField from './InputField'
import Button from './Button'

const Form = ({
  buttonText,
  hide,
  handleSubmit,
  inputTransactionLabel,
  inputAmount,
}) => {
  const [amount, setAmount] = React.useState(0)
  const [transactionLabel, setTransactionLAbel] = useState('')

  const handleChange = (callBack) => (e) => {
    const { value } = e.target || {}
    callBack(value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (amount || transactionLabel) {
      handleSubmit({ amount: +amount, label: transactionLabel })
      setTransactionLAbel('')
      setAmount(0)
    }
  }

  return (
    <form className={hide ? 'hidden' : ''} onSubmit={onSubmit}>
      <InputField
        {...inputTransactionLabel}
        value={transactionLabel || inputTransactionLabel.value}
        onChange={handleChange(setTransactionLAbel)}
      />

      <InputField
        {...inputAmount}
        value={amount || inputAmount.value}
        onChange={handleChange(setAmount)}
      />

      <Button type='submit' className='edit-form__submit-button'>
        {buttonText}
      </Button>
    </form>
  )
}

export default Form
