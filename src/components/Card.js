import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Card = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://real-time-product-search.p.rapidapi.com/product-details?product_id=11577822456427762145&country=us&language=en';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'c73450d139mshdc8268fbc64ca6bp1a33c6jsnbfc32585090a',
                    'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                setProducts(result.products);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    return (
        <div className="flex flex-wrap">
            {products && products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
}

export default Card;
