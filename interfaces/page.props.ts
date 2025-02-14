export interface PageModel {
  _id: string
  tags: string[]
  firstCategory: number
  secondCategory: string
  alias: string
  title: string
  category: string
  categoryOn: string
  tagsTitle: string
  metaTitle: string
  metaDescription: string
  advantages?: any[]
  qas: any[]
  addresses: any[]
  createdAt: string
  updatedAt: string
  seoText?: string
  __v: number
  hh: Hh
  blog: Blog
  sravnikus: Sravnikus
  learningclub: Learningclub
}

export interface AdvantageItem {
  title: string
  description: string
  _id: string
}

export interface Hh {
  count: number
  juniorSalary: number
  middleSalary: number
  seniorSalary: number
  updatedAt: string
  _id: string
}

export interface Blog {
  h1: string
  metaTitle: string
  metaDescription: string
  views: number
  _id: string
}

export interface Sravnikus {
  metaTitle: string
  metaDescription: string
  qas: any[]
  _id: string
}

export interface Learningclub {
  metaTitle: string
  metaDescription: string
  qas: any[]
  _id: string
}
