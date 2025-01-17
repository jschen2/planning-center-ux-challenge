import { ChangeEvent } from "react"

import "./Input.scss"

type InputProps = {
  id: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: "text" | "number"
  value: string
}

export const Input = ({
  id,
  onChange,
  placeholder = "",
  type = "text",
  value,
}: InputProps) => {
  return (
    <input
      className="input"
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  )
}
