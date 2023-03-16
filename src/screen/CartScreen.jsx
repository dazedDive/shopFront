import React from 'react';
import { useSelector } from 'react-redux';
const CartScreen = () => {
    const cart = useSelector((state)=>state.cart)
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl text-slate-800 mt-10">Votre panier :</h1>
            {cart.nbOfArticles.length<1 ?
            <p>Votre panier est vide..</p> :
            cart.articlesDetails.map(article=>{
                return(
                    <span className="flex flex-row mt-10 ml-5">
                        <img
                        className="w-14"
                        src={"images/"+article.id+".jpg"} alt={"mini"+article.name}/>
                        <h1 className="text-2xl ml-5 mt-3"> {article.designation}</h1>
                        <h1 className="text-2xl ml-5 mt-3">Prix : {article.price} €</h1>
                    </span>
                )
            })}
        </div>
    );
};

export default CartScreen;