import { HTMLProps } from "react"

import "./Input.scss"

export const Input = ({
  id,
  onChange,
  placeholder = "",
  type = "text",
  value,
  ...props
}: HTMLProps<HTMLInputElement>) => {
  return (
    <input
      className="input"
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
      {...props}
    />
  )
}
