import { useTheme } from "next-themes"
import { HTMLAttributes } from "react"

interface ITextProps {
  variant?: "h1" | "h2" | "h3" | "span" | "p"
  className?: string
}

const Text: React.FC<ITextProps> = ({
  variant = "span",
  children,
  className = "",
}) => {
  const Element = variant
  const { theme } = useTheme()
  return (
    <Element className={`text-black dark:text-white ${className}`}>
      {children}
    </Element>
  )
}

export default Text
