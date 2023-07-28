import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Product {
    id: string,
    title: string,
    image: string
    description: string,
    categoty: string[],
    platform: string[],
    price: number
}

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/videogame'
        }),
        getProductsBYID: builder.query<Product, {id: string}>({
            query: ({id}) => `/videogame/${id}`
        })
    })
})

export const { useGetProductsQuery } = productsApi