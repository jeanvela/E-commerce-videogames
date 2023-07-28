import CardProducts from "../components/cardProducts/CardProducts"
import { useEffect } from "react"
import { getAllProducts } from "../features/products/productsSlice"
// import { useGetProductsQuery } from "../services/products"
import { useAppSelector, useAppDispatch } from "../features/hook"

const Products = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const products = useAppSelector(state => state.products)
    // const {data} = useGetProductsQuery(null)
    console.log(products)
    // console.log(data)

    useEffect(() => {
        dispatch(getAllProducts)
    },[dispatch])

    return (
        <section>
            {
                products.allProducts.map((produ, i: number) => {
                    return (
                        <CardProducts
                            key={i}
                            _id={produ._id}
                            title={produ.title}
                            price={produ.price}
                            image={produ.image}
                            platform={produ.platform}
                        />
                    )
                })
            }
        </section>
    )
}

export default Products