declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

interface SectionData {
  id: number
  title: string
  imageUrl: string
  linkUrl: string
  size?: string
}

interface ItemData {
  id: number
  name: string
  imageUrl: string
  price: number
}

interface ShopData {
  id: number
  title: string
  routeName: string
  items: ItemData[]
}

interface Credentials {
  email: string
  password: string
}
