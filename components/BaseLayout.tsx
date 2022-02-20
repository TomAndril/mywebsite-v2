import Header from "./Header"
import Text from "./Text"

const BaseLayout: React.FC = ({ children }) => {
  return (
    <div className="max-w-4xl m-auto px-8 lg:px-0">
      <main>
        <Header />
        {children}
      </main>
    </div>
  )
}

export default BaseLayout
