import React from 'react'
import { withConsumer } from '../context'

const Balance = ({ context }) => {
  const unitCurrency = '$'
  const { income, expense, total } = context
  return (
    <section className='summary__container' data-js='js-summary'>
      <h2 className='summary__heading'>
        <div>Your Balance</div>
        <div className='banlance__result'>{` ${unitCurrency} ${total}`}</div>
      </h2>
      <div className='summary__details'>
        <div className='summary__income'>
          <h4>Income</h4>
          <div className='summary__total summary__total--positive'>
            {`${unitCurrency} ${income}`}
          </div>
        </div>
        <div className='summary__expense'>
          <h4>Expense</h4>
          <div className='summary__total summary__total--negative'>
            {` ${unitCurrency} ${expense}`}
          </div>
        </div>
      </div>
    </section>
  )
}

export default withConsumer(Balance)
