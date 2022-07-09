/* eslint-disable @next/next/no-img-element */
import { rebuilderSelector } from "@rebuilder/state"
import { useSelector } from "react-redux"

const PDFPreview = () => {
  const {
    formData: { firstName, lastName, image, introduction, email, link, phone },
  } = useSelector(rebuilderSelector)

  const renderTopSection = (
    <>
      <div className="flex items-center justify-between">
        <div className="w-auto">
          <h1 className="text-5xl font-bold tracking-wide">{firstName}</h1>
          <h2 className="mt-2 text-5xl font-bold tracking-wide">{lastName}</h2>
        </div>
        <div>
          <img
            src={image}
            alt="My Image"
            className="object-cover rounded-full w-36 h-36"
          />
        </div>
      </div>
      <div className="flex mt-12 text-sm leading-snug tracking-wide">
        <div className="basis-2/3">
          <h1>{introduction}</h1>
        </div>
        <div className="text-right basis-1/3">
          <p>{phone}</p>
          <p>{email}</p>
          <a href={link} target="_blank" rel="noreferrer">
            {link}
          </a>
        </div>
      </div>
    </>
  )

  return (
    <div
      style={{ width: "21cm", height: "29.7cm" }} // A4 Size
      className="px-12 pt-16 mx-auto rounded-sm shadow-md bg-slate-100"
    >
      {renderTopSection}
    </div>
  )
}

export default PDFPreview
