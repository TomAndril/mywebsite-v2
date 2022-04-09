import Image, { ImageProps } from "next/image"

const imageConfig: Partial<ImageProps> = {
  width: 1024,
  height: 576,
  priority: true,
  quality: 50,
}

interface Props {
  src: string
  alt: string
}

const CustomImage: React.FC<Props> = ({ alt, src }) => (
  <Image {...imageConfig} src={src} alt={alt} />
)

export default CustomImage
