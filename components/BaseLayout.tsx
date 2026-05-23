import CustomHead from "./Head"
import { ReactNode } from "react"

interface Props {
  title: string
  description: string
  children: ReactNode
}

const BaseLayout: React.FC<Props> = ({ children, description, title }) => {
  return (
    <>
      <CustomHead title={title} description={description} />
      <div className="max-w-xl px-6 py-12 md:py-24 m-auto">
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

export default BaseLayout
