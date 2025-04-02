import { useState } from "react";
import axios from "axios";

export default function OrderForm() {
    const [name, setName] = useState("");
    const [order, setOrder] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = () => {
        axios
            .post("https://jsonplaceholder.typicode.com/posts", {
                name: name,
                order: order,
            })
            .then((response) => {
                setResponse("Тапсырыс берілді! ID: " + response.data.id);
            })
            .catch((error) => {
                console.error("Error:", error);
                setResponse("Тапсырыс беруде қате!");
            });
    };

    return (
        <div>
            <h1>Пицца тапсырыс бер!</h1>

            <input
                type="text"
                placeholder="Атыңызды жазыңыз"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Тапсырыс беріңіз"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
            />

            <button onClick={handleSubmit}>Тапсырыс беру</button>

            {response && <p style={{color: "green"}}>{response}</p>}
        </div>
    );
}