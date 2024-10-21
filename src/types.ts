export interface Product {
    productId: number
    productName: string
    description: string
    price: number
    manufacturer: string
    supply: number
    isFeatured: boolean
}

export interface Customer {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zip: string
    country: string
    birthDate: Date
}

export interface Order {
    orderNumber: number
    productName: string
    quantity: number
    orderDate: Date
    customerId: number
    discountAmount: number
    totalAmount: number
}