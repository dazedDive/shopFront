import { createSlice } from "@reduxjs/toolkit";

const initialState =
    {"nbOfArticles": 0,
    "total": 0,
    "articlesDetails" : []}



const cartSlice = createSlice({
    name: "cartManager",
    initialState,
    reducers:{
        addArticle : (state,action)=>{
            const article = {
            "idAddArticle": action.payload.idAddCart,
            "id": action.payload.id,
            "designation": action.payload.artist +": " +action.payload.name,
            "price": action.payload.price}
            state.articlesDetails.push(article)
            state.total+=action.payload.price
            state.nbOfArticles=state.articlesDetails.length
        },
        delArticle : (state,action)=>{
            const article = state.articlesDetails.find(
                                                a=>a.idAddArticle === action.payload)
            state.total -= article.price
            state.nbOfArticles--
            state.articlesDetails = state.articlesDetails.filter(
                                    a=>a.idAddArticle !== action.payload)
        }
    }
})

export default cartSlice.reducer
export const {addArticle,delArticle} = cartSlice.actions