import React from 'react'
import { useTransactions } from '../costumHooks'
export const Context = React.createContext()

const Provider = ({ children }) => {
  return (
    <Context.Provider value={{ ...useTransactions() }}>
      {children}
    </Context.Provider>
  )
}

export default Provider

export const Consumer = Context.Consumer

export function withConsumer(Component) {
  return (props) => (
    <Consumer>{(value) => <Component {...props} context={value} />}</Consumer>
  )
}
