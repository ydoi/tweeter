import React from "react"
import "./location.css"

export const Location = (prop: any) => {
  return (
    <div>
      <img src="../../public/images/location.png" />
      <span className="Location-text">{prop.location}</span>
    </div>
  )
}