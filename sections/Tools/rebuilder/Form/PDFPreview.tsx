/* eslint-disable @next/next/no-img-element */
import { rebuilderSelector } from "@rebuilder/state"
import { useSelector } from "react-redux"

const PDFPreview = () => {
  const {
    formData: { firstName, lastName, image },
  } = useSelector(rebuilderSelector)

  const renderTopSection = (
    <div className="flex items-center justify-between">
      <div className="w-auto">
        <h1 className="text-5xl font-bold tracking-wide">{firstName}</h1>
        <h1 className="mt-2 text-5xl font-bold tracking-wide truncate">
          {lastName}
        </h1>
      </div>
      <div>
        <img
          src={image}
          alt="My Image"
          className="object-cover rounded-full w-36 h-36"
        />
      </div>
    </div>
  )

  return (
    <div
      style={{ width: "21cm", height: "29.7cm" }}
      className="px-8 pt-16 mx-auto rounded-sm shadow-md bg-slate-100"
    >
      {renderTopSection}
    </div>
  )
}

export default PDFPreview
