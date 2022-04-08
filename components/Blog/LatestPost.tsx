import { IBlogPost } from "../../types"
import CustomPortableText from "./CustomPortableText"

interface Props {
  post: IBlogPost
}

const LatestPost: React.FC<Props> = ({ post }) => {
  const { title, mainImage, body } = post
  return (
    <article>
      {/* image */}
      <div></div>
      {/* content */}
      <header>
        <h2 className="">{title}</h2>
      </header>
      <CustomPortableText body={body} />
      <footer></footer>
    </article>
  )
}

export default LatestPost
