import { IContentOptions } from '@nuxt/content'

export interface PostResult extends IContentOptions {
  title: string
  date: Date
  comments: boolean
  description: string
  categories: string
  slug: string
}
