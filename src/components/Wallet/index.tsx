import { ChangeEvent, useState } from "react"
import { useCards } from "../../hooks/use_cards"
import { Pane } from "../../elements/Pane"
import { Button } from "../../elements/Button"
import { Input } from "../../elements/Input"
import { CreditCard, DebitCard } from "../../icons"
import type { Card } from "../../types"

import "./Wallet.scss"

export const Wallet = () => {
  const { cards, addCard } = useCards()
  const [number, setNumber] = useState("")
  const [cvc, setCvc] = useState("")
  const [expiration, setExpiration] = useState("")
  const [type, setType] = useState<Card["type"]>("credit")

  const handleAddCard = () => {
    addCard({ type, number, cvc, expiration })
    setNumber("")
    setCvc("")
    setExpiration("")
    setType("credit")
  }

  return (
    <Pane size="sm" title="My Wallet">
      <div className="card-form">
        <div className="card-form--row">
          <label>Card Number:</label>
          <Input
            id="name"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNumber(e.target.value)
            }
            placeholder="1111 1111 1111 1111"
            type="text"
            value={number}
          />
        </div>

        <div className="card-form--row">
          <label>CVC:</label>
          <Input
            id="cvc"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCvc(e.target.value)
            }
            placeholder="xxx"
            type="text"
            value={cvc}
          />
        </div>

        <div className="card-form--row">
          <label>Expiration:</label>
          <Input
            id="expiration"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setExpiration(e.target.value)
            }
            placeholder="mm/yyyy"
            type="text"
            value={expiration}
          />
        </div>

        <div className="card-type">
          <p>Card Type:</p>
          <div className="card-type--options">
            <div className="card-type--option">
              <input
                className="sr-only"
                type="radio"
                id="credit"
                name="card-type"
                value="credit"
                checked={type === "credit"}
                onChange={() => setType("credit")}
              />
              <label htmlFor="credit" onClick={() => setType("credit")}>
                Credit
              </label>
            </div>
            <div className="card-type--option">
              <input
                className="sr-only"
                type="radio"
                id="debit"
                name="card-type"
                value="debit"
                checked={type === "debit"}
                onChange={() => setType("debit")}
              />
              <label
                htmlFor="debit"
                onClick={() => setType("debit")}
              >
                Debit
              </label>
            </div>
          </div>
        </div>
        <Button onClick={handleAddCard} text="Add Card" />
      </div>

      <ul className="cards-list" role="list">
        {cards.map((card, index) => {
          return (
            <li className="card" key={index} role="list-item" tabIndex={0} aria-label={`${card.type} card ${card.number}`}>
              <div className="card--icon">
                {card.type === "credit" ? <CreditCard /> : <DebitCard />}
              </div>

              <div className="card--details">
                <h2 className="card--number">{card.number}</h2>
                <div className="flex">
                  <p className="card--cvc">{card.cvc}</p>
                  <p className="card--expiration">{card.expiration}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </Pane>
  )
}
