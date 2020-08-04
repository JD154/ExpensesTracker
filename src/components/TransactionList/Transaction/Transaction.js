import React, { useContext } from 'react'
import ListItem from '@material-ui/core/ListItem'
import Delete from '@material-ui/icons/Delete'

import { GlobalContext } from '../../../context/GlobalState'

import styles from './Transaction.module.scss'

export const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext)

  const { id, text, amount} = props.transaction
  const sign = amount < 0 ? '-' : '+'

  const deleteTransactionHandler = () => {
    deleteTransaction(id)
  }

  return (
    <ListItem className={styles.listItem}>
      {text}
      <span className={amount < 0 ? styles.minus : styles.plus}>{sign} ${Math.abs(amount)}</span>
      <Delete onClick={deleteTransactionHandler} className={styles.deleteBtn}/>
    </ListItem>
  )
}
