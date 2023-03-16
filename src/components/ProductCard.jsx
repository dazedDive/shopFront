import React from 'react';
import { useDispatch} from 'react-redux';
import { addArticle } from '../redux/CartSlice';


const ProductCard = ({id,artist,name,stock,price}) => {

    const dispatch = useDispatch();

    return (
        <div className="shadow-xl ... ">
            <span>
            <img
            className="w-128"
            src={'images/'+id+'.jpg'}
            alt={artist}/>
            <h1 className="text-xl text-neutral-800">{artist}</h1>
            <h1>{name}</h1>
            {stock<3 ? <p className="text-red-900">Plus que {stock} en stock!</p> : <p> En stock</p>}
            <span className="flex flex-row m-3">
            <h1 className="text-2xl text-red-900">{price} €/TTC</h1>
            <button className="bg-slate-400 p-3 rounded-md ml-8 mb-5 hover:scale-105 hover:text-red-800 duration-200"
            onClick={()=>{const idAddCart = Date.now();
                        dispatch(addArticle({id:id,
                                             idAddCart:idAddCart,
                                             artist: artist,
                                             name: name,
                                             price: price}))}}>Add To Cart</button>
            </span>
            </span>
        </div>
    );
};

export default ProductCard;