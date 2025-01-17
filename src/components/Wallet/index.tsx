import { ChangeEvent, useState } from "react"
import { useCards } from "../../hooks/use_cards"
import { Pane } from "../../elements/Pane"
import { Button } from "../../elements/Button"
import { Input } from "../../elements/Input"
import { CreditCard, DebitCard } from "../../icons"
import type { PaymentCard } from "../../types"

import "./Wallet.scss"
import { Card, CardDetails, CardIcon, CardList, CardNumber } from "../../elements/Card"

export const Wallet = () => {
  const { cards, addCard } = useCards()
  const [number, setNumber] = useState("")
  const [cvc, setCvc] = useState("")
  const [expiration, setExpiration] = useState("")
  const [type, setType] = useState<PaymentCard["type"]>("credit")

  const handleAddCard = () => {
    addCard({ type, number, cvc, expiration })
    setNumber("")
    setCvc("")
    setExpiration("")
    setType("credit")
  }

  return (
    <Pane size="md" title="My Wallet">
      <div className="card-form">
        <div className="card-form--row">
          <label htmlFor="card-number">Card Number:</label>
          <Input
            id="card-number"
            name="card-number"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNumber(e.target.value)
            }
            placeholder="1111 1111 1111 1111"
            type="text"
            value={number}
          />
        </div>

        <div className="card-form--row">
          <label htmlFor="cvc">CVC:</label>
          <Input
            id="cvc"
            name="cvc"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCvc(e.target.value)
            }
            placeholder="xxx"
            type="text"
            value={cvc}
          />
        </div>

        <div className="card-form--row">
          <label htmlFor="expiration">Expiration:</label>
          <Input
            id="expiration"
            name="expiration"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setExpiration(e.target.value)
            }
            placeholder="mm/yyyy"
            type="text"
            value={expiration}
          />
        </div>

        <fieldset className="card-form--fieldset">
          <div className="card-form--row">
            <legend>Card Type:</legend>
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
        </fieldset>
        <Button onClick={handleAddCard} text="Add Card" />
      </div>

      <CardList>
        {cards.map((card, index) => {
          const key = `${card.number}-${index}`;
          return (
            <Card key={key} aria-label={`${card.type} card ${card.number}`}>
              <CardIcon>
                {card.type === "credit" ? <CreditCard /> : <DebitCard />}
              </CardIcon>

              <CardDetails>
                <CardNumber>{card.number}</CardNumber>
                <div className="flex">
                  <p className="card--cvc">{card.cvc}</p>
                  <p className="card--expiration">{card.expiration}</p>
                </div>
              </CardDetails>
            </Card>
          )
        })}
      </CardList>
    </Pane>
  )
}
