export interface Products {
    data: Product[]
    meta: Meta
  }
  
  export interface Product {
    id: number
    attributes: Attributes
  }
  
  export interface Attributes {
    name: string
    price: number
    weight: number
    description: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    energy_value: number
    image: Image
    category: Category
    composition: Composition[]
  }
  
  export interface Category {
    data: {
      id: number
      attributes: {
        name: string
        title: string
      }
    }
    meta: Meta
  }

  export interface Image {
    data: Data
  }
  
  export interface Data {
    id: number
    attributes: Attributes2
  }
  
  export interface Attributes2 {
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
  }
  
  export interface Formats {
    thumbnail: Thumbnail
  }
  
  export interface Thumbnail {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
  }
  
  export interface Composition {
    id: number
    item: string
  }
  
  export interface Meta {
    pagination: Pagination
  }
  
  export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }