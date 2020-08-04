import React from 'react';
import Container from '@material-ui/core/Container'
import { UserBalance } from './components/UserBalance/UserBalance'
import { Expenses } from './components/Expenses/Expenses'
import { TransactionList } from './components/TransactionList/TransactionList'
import { NewTransaction } from './components/NewTransaction/NewTransaction'

import styles from './App.module.scss'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Container maxWidth="xs" className={styles.appWrapper}>
        <UserBalance />
        <Expenses />
        <TransactionList />
        <NewTransaction />
      </Container>
    </GlobalProvider>
  );
}

export default App;
