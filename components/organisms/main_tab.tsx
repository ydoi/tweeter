import React, { useState, useEffect } from "react"
import { Tweet } from "../../types"

import "./main_tab.css"

export const MainTab = () => {
  const [tweets, setTweets] = useState<Tweet[]>([])
  // TODO mock api
  useEffect(() => {
    setTweets(
    [{
      name: 'どいくん',
      account_image: '../../public/images/ryu.jpg',
      date: '2020-10-20',
      text: 'テクノいきます',
      image: [''],
      comment_ids: [1],
      retweet_count: 1,
      like_count: 1,
    }])
  }, [])

  return (
    <div>
      <ul className="MainTab__List">
        <li>ツイート</li>
        <li>ツイートと返信</li>
        <li>メディア</li>
        {/* <li>&gt;</li> */}
      </ul>
      { tweets.map(tweet => {
        return (
          <div className="MainTab__Container">
            <img src={tweet.account_image} width="60px" height="60px" alt="" />
            <div>
              <p>{tweet.name}</p>
              <p>{tweet.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}