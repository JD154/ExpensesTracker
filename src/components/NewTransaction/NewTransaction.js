import React, { useState, useContext } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { getTimestamp } from '../../Utils/Timestamp'
import { GlobalContext } from '../../context/GlobalState'

import styles from './NewTransaction.module.scss'

export const NewTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  
  const { addTransaction } = useContext(GlobalContext)

  const updateTextHandler = (e) => {
    setText(e.target.value)
  }

  const updateAmountHandler = (e) => {
    setAmount(e.target.value)
  }

  const submitTransaction = (e) => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      date: getTimestamp()
    }

    addTransaction(newTransaction)
  }
  
  return (
    <div>
      <Typography className="sectionTitle" color="textSecondary" gutterBottom>
        Add transaction
      </Typography>
      <form onSubmit={submitTransaction}>
        <div className={styles.formRow}>
          <TextField value={text} onChange={updateTextHandler} label="Subject" variant="outlined" />
          <TextField value={amount} onChange={updateAmountHandler} label="Amount" variant="outlined" />
        </div>
        <div className={styles.formRow}>
          <Button type="submit" variant="contained" className={styles.createBtn}>Create transaction</Button>
        </div>
      </form>
    </div>
  )
}

