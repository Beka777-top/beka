import { useReducer } from "react";

const initialState = {
    loading: false,
    data: null,
    error: '',
}
const FetchReducer = (state: any, action: any) => {
    
}
export default function Reducer2() {
    const [state, dispatch] = useReducer(FetchReducer, initialState);

    return (
        <div>
            <h1>Fetch</h1>
        </div>
    );
}
