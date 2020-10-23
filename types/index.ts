export * from './profile'

export interface Tweet {
  name: string
  account_image: string
  date: string
  text: string
  image?: string[]
  comment_ids?: number[]
  retweet_count?: number
  like_count?: number
}