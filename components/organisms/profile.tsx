import React, { useState, useEffect } from "react"

import { ProfileState } from "../../types"
import "./profile.css"

import { Location } from "../../components/molecules/location"

const defaultState: ProfileState = {
  id: '',
  photo: '',
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
      <div className="Profile__Photo">
        <img className="Profile__Photo-img" src={props.profile.photo} width="90px" height="90px" alt="" />
      </div>
      <div className="Profile__Follow-data">
        <span className="Profile__Follow-data--name">{profile.name}</span>
        <p>{`@${profile.id}`}</p>
        <p>{profile.description}</p>
        <Location location={profile.location} />
        <div>
          <span>{profile.following}</span><label> フォロー中</label>
          <span>{profile.followers}</span><label> フォロワー</label>
        </div>
      </div>
    </div>
  )
}