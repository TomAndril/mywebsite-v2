import Text from "../Text"

interface Props {
  text: string
}

const Badge: React.FC<Props> = ({ text }) => {
  return (
    <Text
      variant="span"
      className="absolute right-0 px-1 text-xs font-thin tracking-wider uppercase rounded-md bg-sky-400 dark:bg-sky-800 -top-3"
    >
      {text}
    </Text>
  )
}

export default Badge
