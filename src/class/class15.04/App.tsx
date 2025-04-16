import { useReducer, useEffect } from "react";
import "./app.css";

const initialState = {
    loading: false,
    data: null,
    error: "",
    show: false,
};

function FetchReducer(state: any, action: any) {
    switch (action.type) {
        case "start":
            return {
                ...state,
                loading: true,
                error: "",
            };
        case "success":
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case "error":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case "toggle":
            return {
                ...state,
                show: !state.show, 
            };
        default:
            return state;
    }
}

export default function App() {
    const [state, dispatch] = useReducer(FetchReducer, initialState);

    async function fetchData() {
        try {
            dispatch({ type: "start" });
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();

            console.log(data);

            dispatch({ type: "success", payload: data });
        } catch (error) {
            dispatch({ type: "error", payload: "we couldn't fetch data" });
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>FETCHING API</h1>

            {!state.show && (
                <button onClick={() => dispatch({ type: "toggle" })}>Show</button>
            )}

            {state.show && (
                <>
                    {state.loading && <p>Loading...</p>}

                    {state.error && <p>{state.error}</p>}

                    {state.data && (
                        <div className="container">
                            {state.data.map((item: any) => (
                                <div className="card" key={item.id}>
                                    <img src={item.image} alt="" />
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <p>Price:{item.price}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </>
    );
}