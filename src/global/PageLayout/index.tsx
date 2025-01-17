import { ReactNode } from "react"
import { Header } from "../Header"
import { Nav } from "../Nav"

import "./PageLayout.scss"

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Nav />
        {children}
        <div className="placeholder m-0" />
      </div>
      <div className="placeholder footer" />
    </div>
  )
}
