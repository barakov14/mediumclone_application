import {DeepReadonly} from '@core/utils'

export type ArticlesDTO = DeepReadonly<{
  articles: [
    {
      slug: string
      title: string
      description: string
      body: string
      tagList: string[]
      createdAt: string
      updatedAt: string
      favorited: boolean
      favoritesCount: number
      author: ArticleAuthor
    }
  ]
  articlesCount: number
}>

export interface ArticleAuthor {
  username: string
  bio: string
  image: string
  following: boolean
}
