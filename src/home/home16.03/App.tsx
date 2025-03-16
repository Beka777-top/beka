import React, { useEffect, useState } from 'react';

export default function App(){
    const[history, setHistory] = useState([])

    useEffect(() =>{
        const savedHistory = localStorage.getItem('history')
        if(savedHistory){
            setHistory(JSON.parse(savedHistory))
        }
    }, []);

    useEffect(() =>{
        localStorage.setItem('history', JSON.stringify(history))
    }, [history])
    
    const handleProductClick = (product) => {
        setHistory((prevHistory) => {
            const updatedHistory = prevHistory.filter((item) => item !== product);
            return [product, ...updatedHistory];
        });
    };
    return(
        <div>
        <h1>Product</h1>

        <button onClick={() => handleProductClick('Phone')}>Phone</button>
        <button onClick={() => handleProductClick('Laptop')}>Laptop</button>
        <button onClick={() => handleProductClick('AirPhone')}>AirPhone</button>
        <button onClick={() => handleProductClick('Whatch')}>Whatch</button>
        <button onClick={() => handleProductClick('Camera')}>Camera</button>

        <h2>History</h2>
        <ul>
            {history.map((item, index) =>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        </div>
    )
}