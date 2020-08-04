import React, { useContext } from 'react'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import { GlobalContext } from '../../context/GlobalState'
import { Transaction } from './Transaction/Transaction'
import { getTimestamp } from '../../Utils/Timestamp'
import styles from './TransactionList.module.scss'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  const getTodayTransactions =
    transactions
      .filter(transaction => transaction.date === getTimestamp())
      .map(transaction => (
        <Transaction transaction={transaction} key={transaction.id}/>
      ))
  
  const getPastTransactions =
    transactions
      .filter(transaction => transaction.date !== getTimestamp())
      .map(transaction => (
        <Transaction transaction={transaction} key={transaction.id}/>
      ))
      
  return (
    <div>
      <div>
        <Typography color="textSecondary" gutterBottom>
            Today
        </Typography>
        <List className={styles.listWrapper}>
          {getTodayTransactions}
        </List>
      </div>
      <div>
        <Typography color="textSecondary" gutterBottom>
          Older
        </Typography>
        <List className={styles.listWrapper}>
          {getPastTransactions}
        </List>
      </div>
    </div>
  )
}
