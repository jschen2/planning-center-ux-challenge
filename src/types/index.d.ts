export type Card = {
  type: "credit" | "debit"
  number: string
  cvc: string
  expiration: string
}

export type Transaction = {
  id: number
  description: string
  category: string
  amount: number
  date: string
  isRecurring: boolean
}
