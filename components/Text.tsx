interface ITextProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "span" | "p" | "li"
  className?: string
}

const Text: React.FC<ITextProps> = ({
  variant = "span",
  children,
  className = "",
}) => {
  const Element = variant
  return (
    <Element className={`text-black dark:text-white ${className}`}>
      {children}
    </Element>
  )
}

export default Text
