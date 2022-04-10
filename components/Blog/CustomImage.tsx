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
  className?: string
}

const CustomImage: React.FC<Props> = ({ alt, src, className = "" }) => (
  <Image {...imageConfig} src={src} alt={alt} className={className} />
)

export default CustomImage
