import { createSlice } from "@reduxjs/toolkit";

const initialState =
    {"nbOfArticles": 0,
    "total": 0 +"€",
    "articlesDetails" : []}



const cartSlice = createSlice({
    name: "cartManager",
    initialState,
    reducers:{
        addArticle : (state,action)=>{
            const article = {"id": action.payload.id,
            "designation": action.payload.artist +": " +action.payload.name,
            "price": action.payload.price}
            state.articlesDetails.push(article)
            state.nbOfArticles=state.articlesDetails.length
        }
    }
})

export default cartSlice.reducer
export const {addArticle} = cartSlice.actions