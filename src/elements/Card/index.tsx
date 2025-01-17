import { HTMLAttributes, PropsWithChildren } from "react"

import { classnames } from "../../utils/classnames"

import "./Card.scss";

export const CardList = ({ children, className }: PropsWithChildren<HTMLAttributes<HTMLUListElement>>) => {
  return <ul className={classnames("cards-list", className)} role="list">{children}</ul>;
}

export const Card = ({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLLIElement>>) => {
  return <li className="card" role="list-item" tabIndex={0} {...props}>{children}</li>;
}

export const CardIcon = ({ children }: PropsWithChildren) => {
  return <div className="card--icon">{children}</div>;
}

export const CardDetails = ({ children, className }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return <div className={classnames("card--details", className)}>{children}</div>;
}

export const CardNumber = ({ children }: PropsWithChildren) => {
  return <h2 className="card--number">{children}</h2>;
}