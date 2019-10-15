interface ItemData {
  id: number
  title?: string
  imageUrl: string
  linkUrl?: string
  size?: string
  price?: number
}

interface ShopData {
  id: number
  title: string
  routeName: string
  items: ItemData[]
}
