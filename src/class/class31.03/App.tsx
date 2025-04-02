import React, {useState} from "react";

function App() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    function setUp(e){
        e.preventDefault();

        if(!email.includes("@")){
            setErrors({email: "@ is required"});
            return;
    }
        if(password.length < 6){
            setErrors({password: "Password must be at least 6 characters"});
            return;
        }

        setErrors({});
        alert("Login successful!");
    }

    return (
        <form onSubmit={setUp}>
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type="submit">Submit</button>
            {errors && <p>Error</p>}
        </form>
    )
}
export default App;