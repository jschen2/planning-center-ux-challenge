import { ReactNode } from "react"

import "./Button.scss"

type BaseButtonProps = {
  onClick: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline";
  block?: boolean;
}

type TextButtonProps = BaseButtonProps & {
  text: string;
  children?: never;
}

type ChildrenButtonProps = BaseButtonProps & {
  children: ReactNode;
  text?: never;
}

type ButtonProps = TextButtonProps | ChildrenButtonProps;

export const Button = ({
  children,
  onClick,
  size = "md",
  variant = "filled",
  text = "",
  block,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`button button--${size} button--${variant}${block ? " button--block" : ""}`}
      {...restProps}
    >
      {text || children}
    </button>
  )
}
