import { createElement } from "react"
import { NavLink } from "react-router-dom"
import type { IconType } from "react-icons/lib"
import {
  Wallet,
  WalletOutline,
  Budget,
  BudgetOutline,
  Transactions,
  TransactionsOutline,
} from "../../icons"
import "./Nav.scss"

type LinkProps = {
  to: string
  label: string
  icon: IconType
  iconActive: IconType
}

const Link = ({ to, label, icon, iconActive }: LinkProps) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <>
          {isActive ? createElement(iconActive) : createElement(icon)}
          {label}
        </>
      )}
    </NavLink>
  )
}

export const Nav = () => {
  return (
    <nav>
      <Link to="/" label="My Wallet" icon={WalletOutline} iconActive={Wallet} />
      <Link
        to="/budget"
        label="Budget"
        icon={BudgetOutline}
        iconActive={Budget}
      />
      <Link
        to="/transactions"
        label="Transactions"
        icon={TransactionsOutline}
        iconActive={Transactions}
      />
    </nav>
  )
}
