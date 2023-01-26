import { animateScroll } from "react-scroll"

export const scrollToContainerBottom = (id: string): void => {
  setTimeout(() => {
    animateScroll.scrollToBottom({
      containerId: id,
      smooth: true,
      duration: 500,
    })
  }, 100)
}
