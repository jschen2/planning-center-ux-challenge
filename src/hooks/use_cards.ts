import { useEffect } from "react"
import { useDataContext } from "./use_data_context"
import { cards as initialCards } from "../data/cards"
import type { Card } from "../types"

type CardsState = { cards: Card[] }

export const useCards = () => {
  const { data, setData } = useDataContext<CardsState>()

  useEffect(() => {
    if (!data.cards || data.cards.length === 0) {
      setData((prevData) => ({
        ...prevData,
        cards: initialCards,
      }))
    }
  }, [data.cards, setData])

  const addCard = (card: Card) => {
    setData((prevData) => ({
      ...prevData,
      cards: [...prevData.cards, card],
    }))
  }

  const removeCard = (cardNumber: string) => {
    setData((prevData) => ({
      ...prevData,
      cards: prevData.cards.filter((card) => card.number !== cardNumber),
    }))
  }

  return {
    cards: data.cards || [],
    addCard,
    removeCard,
  }
}
