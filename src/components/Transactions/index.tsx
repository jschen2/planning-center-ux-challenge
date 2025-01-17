import { useTransactions } from "../../hooks/use_transactions"
import { Pane } from "../../elements/Pane"
import "./Transactions.scss"

export const Transactions = () => {
  const { transactions, calculateBalance } = useTransactions()
  const startingBalance = 3250.2
  const balance = calculateBalance(startingBalance)

  return (
    <Pane size="lg" title="Transactions">
      <div className="transactions">
        <p>Balance:</p>
        <h2>${balance.toFixed(2)}</h2>
        {transactions.map((transaction, index) => {
          return (
            <div style={{ marginBottom: 8 }} key={index}>
              <div>{transaction.description}</div>
              <div>{transaction.amount}</div>
              <div>{transaction.category}</div>
              <div>{transaction.date}</div>
            </div>
          )
        })}
      </div>
    </Pane>
  )
}
