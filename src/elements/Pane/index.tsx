import { ReactNode } from "react"

import "./Pane.scss"

type PaneProps = {
  children: ReactNode
  size?: "sm" | "md" | "lg"
  title: string
}

export const Pane = ({ children, size = "md", title }: PaneProps) => {
  return (
    <div className={`pane pane--${size}`}>
      {title && (
        <div className="pane--header">
          <h2>{title}</h2>
        </div>
      )}
      <div className="pane--content">{children}</div>
    </div>
  )
}
