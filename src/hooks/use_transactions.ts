import { useEffect } from "react"
import { useDataContext } from "./use_data_context"
import { transactions as initialTransactions } from "../data/transactions"
import type { Transaction } from "../types"

type TransactionsState = { transactions: Transaction[] }

export const useTransactions = () => {
  const { data, setData } = useDataContext<TransactionsState>()

  useEffect(() => {
    if (!data.transactions || data.transactions.length === 0) {
      setData((prevData) => ({
        ...prevData,
        transactions: initialTransactions,
      }))
    }
  }, [data.transactions, setData])

  const addTransaction = (transaction: Transaction) => {
    setData((prevData) => ({
      ...prevData,
      transactions: [...(prevData.transactions || []), transaction],
    }))
  }

  const removeTransaction = (id: string | number) => {
    setData((prevData) => ({
      ...prevData,
      transactions: (prevData.transactions || []).filter(
        (transaction) => transaction.id !== id
      ),
    }))
  }

  const calculateBalance = (startingBalance: number) => {
    const totalTransactionsAmount = (data.transactions || []).reduce(
      (accumulator, transaction) => accumulator + transaction.amount,
      0
    )
    return startingBalance - totalTransactionsAmount
  }

  return {
    transactions: data.transactions || [],
    addTransaction,
    removeTransaction,
    calculateBalance,
  }
}
