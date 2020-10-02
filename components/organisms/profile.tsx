import React, { useState, useEffect } from "react"

import { ProfileState } from "../../types"
import "./profile.css"

import { Location } from "../../components/molecules/location"
import { Link } from "../../components/molecules/link"

const defaultState: ProfileState = {
  id: '',
  photo: '',
  backgroundImage: '',
  name: '',
  following: 0,
  followers: 0,
  description: '',
  location: '',
  link: '',
}

export const Profile = (props: any) => {
  const [profile, setProfile] = useState<ProfileState>(defaultState)
  useEffect(() => {
    setProfile({
      ...props.profile
    })
  }, [])
  return (
    <div className="Profile__Container">
      <div>
        <img className="Profile__background" src={profile.backgroundImage} alt="" />
      </div>
      <div className="Profile__Main">
        <div className="Profile__Photo">
          <img className="Profile__Photo-img" src={props.profile.photo} width="90px" height="90px" alt="" />
        </div>
        <div className="Profile__Follow-data">
          <span className="Profile__Follow-data--name">{profile.name}</span>
          <p>{`@${profile.id}`}</p>
          <p>{profile.description}</p>
          <div className="Profile__Option">
            <Location location={profile.location} />
            <Link link={profile.link} />
          </div>
          <div className="Profile__Follow-data--number">
            <span>{profile.following}</span><label> フォロー中</label>
            <span>{profile.followers}</span><label> フォロワー</label>
          </div>
        </div>
      </div>
    </div>
  )
}