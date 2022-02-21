import Footer from "./Footer"
import Header from "./Header"

const BaseLayout: React.FC = ({ children }) => {
  return (
    <div className="max-w-4xl px-8 m-auto lg:px-0">
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default BaseLayout
