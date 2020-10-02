import React from "react"
import "./location.css"

export const Location = (prop: any) => {
  return (
    <div className="Location__container">
      <img src="../../public/images/location.png" />
      <span className="Location__text">{prop.location}</span>
    </div>
  )
}