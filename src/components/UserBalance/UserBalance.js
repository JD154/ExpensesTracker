import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

import styles from './UserBalance.module.scss'

export const UserBalance = () => {
  const { transactions } = useContext(GlobalContext)
  
  const amounts = transactions.map(transaction => transaction.amount)
  const totalBalance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  console.log(totalBalance);
  return (
    <div className={styles.balanceWrapper}>
      <p className={styles.balanceTitle}>Your balance</p>
      <h1 className={styles.balanceAmount}>${totalBalance} USD</h1>
    </div>
  )
}
