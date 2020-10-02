import React from "react"
import "./link.css"

export const Link = (prop: any) => {
  return (
    <div className="Link__container">
      <img src="../../public/images/icon/link.svg" width="16px" height="16px" />
      <a href={prop.link}>{prop.link}</a>
    </div>
  )
}