import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

import styles from './Expenses.module.scss'

export const Expenses = () => {
  const { transactions } = useContext(GlobalContext)
  
  const amounts = transactions.map(transaction => transaction.amount)
  
  const incomes = amounts
    .filter(amount => amount > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)
    
  const expenses = Math.abs(amounts
    .filter(amount => amount < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2))


  return (
    <div className={styles.expensesWrapper}>
      <div className={styles.expensesCard}>
        <div className={styles.expensesCardBody}>
          <p>Incomes</p>
          <h3 className={styles.incomeTitle}>${incomes}</h3>
        </div>
      </div>
      <div className={styles.expensesCard}>
        <div className={styles.expensesCardBody}>
          <p>Expenses</p>
          <h3 className={styles.expenseTitle}>${expenses}</h3>
        </div>
      </div>
    </div>
  )
}
