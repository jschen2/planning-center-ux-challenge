import * as icons from "../../icons"
import { useTransactions } from "../../hooks/use_transactions"
import { Pane } from "../../elements/Pane"
import "./Transactions.scss"
import { Metric, MetricTitle, MetricValue } from "../../elements/Metric"
import { currencyFormatter } from "../../utils/currencyFormatter"
import { dateFormat } from "../../utils/dateFormat"
import { IconType } from "react-icons"

export const Transactions = () => {
  const { transactions, calculateBalance } = useTransactions()
  const startingBalance = 3250.2
  const balance = calculateBalance(startingBalance)

  return (
    <Pane size="md" title="Transactions">
      <div className="transactions">
        <Metric>
          <MetricTitle>Balance</MetricTitle>
          <MetricValue>{currencyFormatter().format(balance)}</MetricValue>
        </Metric>
        <ul className="transactions--list">
          {transactions.map((transaction, index) => {
            const Icon = (icons as Record<string, IconType>)[
              transaction.category
                .replace("&", "")
                .split(" ")
                .join("")
              ] || "div";
            return (
              <li className="transaction" key={index}>
                <div className="transaction--section">
                  <div className="transaction--icon">
                    <Icon />
                  </div>
                  <div className="transaction--details">
                    <div className="transaction--description">{transaction.description}</div>
                    <div className="transaction--category">{transaction.category}</div>
                  </div>
                </div>
                <div className="transaction--details">
                  <div className="transaction--amount">{currencyFormatter(true).format(transaction.amount)}</div>
                  <div className="transaction--date">{dateFormat(transaction.date)}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Pane>
  )
}
