import { useState } from "react";
import axios from "axios";

export default function JokeApp() {
    const [joke, setJoke] = useState("");
    const [error, setError] = useState("");

    const handleGetJoke = () => {
        axios
            .get("https://official-joke-api.appspot.com/random_joke")
            .then((response) => {
                const jokeData = response.data;
                setJoke(`${jokeData.setup} - ${jokeData.punchline}`);
                setError(""); 
            })
            .catch((error) => {
                console.log('Error:',error);
                setError("Joke алу кезінде қате пайда болды!");
            })
            
    };

    return (
        <div>
            <h1>Күліп алу үшін әзіл ал!</h1>

            <button onClick={handleGetJoke}>Әзіл алу</button>

            {joke && <p style={{ color: "green", fontWeight: "bold" }}>{joke}</p>}
            {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
        </div>
    );
}