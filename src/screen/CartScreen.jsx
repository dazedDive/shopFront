import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delArticle } from '../redux/CartSlice';
const CartScreen = () => {
    const cart = useSelector((state)=>state.cart)
    const dispatch = useDispatch();

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl text-slate-800 mt-10">Votre panier :</h1>
            {cart?.articlesDetails.length<1 ?
            <p>Votre panier est vide..</p> :
            cart?.articlesDetails.map(article=>{
                return(
                    <span className="flex flex-row mt-10 ml-5">
                        <img
                        className="w-14"
                        src={"images/"+article.id+".jpg"} alt={"mini"+article.name}/>
                        <h1 className="text-2xl ml-5 mt-3"> {article.designation}</h1>
                        <h1 className="text-2xl ml-5 mt-3">Prix : {article.price} €</h1>
                        <button className="bg-slate-400 p-3 rounded-md ml-8 mb-5 hover:scale-105 hover:text-red-800 duration-200"
                        onClick={()=>dispatch(delArticle(article.idAddArticle))}
                        > Retirer </button>
                    </span>
                )
            })}
            {cart?.articlesDetails.length>0 &&
            <h1 className="text-right text-4xl">{cart.total} €/TTC</h1>}
        </div>
    );
};

export default CartScreen;