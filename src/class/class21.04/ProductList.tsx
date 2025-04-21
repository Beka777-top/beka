import React from "react";
import { useCart } from "./App";

export default function ProductList() {
    const { dispatch } = useCart();

    const products = [
        { id: 1, title: "MERSEDES BENZ", price: 10000000  },
        { id: 2, title: "BMW", price: 200000 },
        { id: 3, title: "TOYOTA", price: 300000 },
    ];

    return (
        <div className="product-list">
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <span>{product.title} - ${product.price}</span>
                    <button
                        onClick={() =>
                            dispatch({ type: "ADD_ITEM", payload: product })
                        }
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}