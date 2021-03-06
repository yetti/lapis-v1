import { IContentOptions } from '@nuxt/content'

export interface PostResult extends IContentOptions {
  title: string
  date: Date
  comments: boolean
  description: string
  categories: string
  slug: string
}

export interface ProjectResult extends IContentOptions {
  title: string
  categories: string
  icon: string
  url: string
  description: string
  slug: string
}
