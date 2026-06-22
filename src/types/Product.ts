export interface ProductType {
  id: number
  slug: string
  title: string
  proImg: string
  price: number | string
  delPrice?: number | string
  brand?: string
  size?: string
}