import { createSlice, PayloadAction, ThunkAction, Action } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState, AppDispatch} from '../../app/store'

interface Product {
    _id: string,
    title: string,
    price: number,
    description: string,
    image: string,
    category: string[],
    platform: string[],
    
}

interface ProductsState {
    allProducts: Product[]
}

const initialState: ProductsState = {
    allProducts: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product[]>) => {
            state.allProducts = action.payload
        }
    },
    extraReducers: {}
})

export const { addProduct } = productsSlice.actions

export default productsSlice.reducer

export const getAllProducts = async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<Product[]>('http://localhost:3001/videogame')
        dispatch(addProduct(response.data))
    } catch (error) {
        console.log(error)
    }
}
