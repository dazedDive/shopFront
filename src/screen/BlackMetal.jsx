import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const BlackMetal = () => {
    const [data,setData] = useState()
    useEffect(()=>{
        fetch('http://localhost:8080/api/v1/article')
        .then(rep=>rep.json())
        .then(json=>setData(json))
    },[])

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl text-slate-800 pt-4 pb-4">Black Metal products :</h1>
            <div className="columns-2xl">
                {data?.map(article=>{
                    return(
                        <ProductCard
                        key={article.id}
                        id={article.id}
                        name={article.name}
                        price={article.price}
                        stock={article.stock}
                        artist={article.artist}/>
                    )
                })}
            </div>
        </div>
    );
};

export default BlackMetal;