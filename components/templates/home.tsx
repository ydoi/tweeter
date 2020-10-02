import React from "react"

import { Profile } from "../organisms/profile"
import { ProfileState } from "../../types"

export const Home = () => {
  const myProfile: ProfileState = {
    id: 'doikun3939',
    photo: '../../public/images/ryu.jpg',
    backgroundImage: '../../public/images/suzaku_jyo.jpeg',
    name: 'どいくん',
    following: 1000,
    followers: 1,
    description: 'street fighter5  リュウ  fighter\'s ID: doikun ゲームセンター大好き よく行くゲームセンター：ファンタジスタ、アミパラ倉敷、アミパラテクノランド、ドライブイン古城',
    location: '岡山県倉敷市',
    link: 'twitch.tv/doikun',
  }
  return (
    <div className="Home">
      <Profile profile={myProfile} />
    </div>
  )
}