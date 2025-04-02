import React, {useState} from "react";
import "./Test.css";
export default function Test() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    function setUp(e:any) {
        e.preventDefault();
        if (/\d/.test(username)) {
          setError("Username must contain only Strings");
          return;
        }

        if(password !== confirmPassword){
            setError('Password and Confirm Password do not match');
            return;
        }
        if(!email.includes('@')){
            setError('Invalid email address');
            return;
        }
        if(password.length < 8){
            setError('Password must be at least 8 characters long');
            return;
        }
        setError('');
        setIsLoggedIn(true);
        alert('Logged in successfully!');
    }

//     const userData = {
//         username, 
//         email,
//     };

//     localStorage.setItem('userData', JSON.stringify(userData));
//     setError('');
//     setIsLoggedIn(true);
//     alert('Logged in successfully!');
// }
return(
    <form onSubmit={setUp}>
        <h1>Login</h1>
        <label >Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label >Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label >Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label >Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <p style={{color: 'red'}}>{error}</p>}
        {error=='' && <p style={{color: 'green'}}>Logged in successfully!</p>}
        {error=='' && <p style={{color: 'green'}}>Welcome, {username}!</p>}
    </form>)}
