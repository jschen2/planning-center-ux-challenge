import { renderToStaticMarkup } from "react-dom/server"
import { FaChevronDown } from "react-icons/fa"

import "./Select.scss"

type SelectProps = {
  onChange: any
  options: { value: string; label: string }[]
  value: string
}

export const Select = ({ onChange, options = [], value }: SelectProps) => {
  const rootStyles = getComputedStyle(document.documentElement)
  const gray500 = rootStyles.getPropertyValue("--color-gray-500").trim()
  const svgString = encodeURIComponent(
    renderToStaticMarkup(<FaChevronDown color={gray500} />)
  )
  const iconDataUri = `url("data:image/svg+xml,${svgString}")`

  return (
    <select
      onChange={onChange}
      style={{ backgroundImage: iconDataUri }}
      value={value}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
