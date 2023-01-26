import Footer from "./Footer"
import Header from "./Header"
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
      <div className="max-w-4xl px-8 m-auto lg:px-0">
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}

export default BaseLayout
