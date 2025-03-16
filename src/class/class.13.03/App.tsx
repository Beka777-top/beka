import { useState, useEffect } from "react";

// export default function ColorPicker() {


//   const [color, setColor] = useState("red");

//   useEffect(() => {
//     const savedColor = localStorage.getItem("color");
//     if (savedColor) {
//       setColor(savedColor);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("color", color);
//   }, [color]);

//   return (
//     <div style={{ backgroundColor: color, height: "100vh" }}>
//       <h2>Түс таңда:</h2>
//       <button onClick={() => setColor("red")}>🔴 Қызыл</button>
//       <button onClick={() => setColor("blue")}>🔵 Көк</button>
//       <button onClick={() => setColor("green")}>🟢 Жасыл</button>
//     </div>
//   );
// }




// export default function Login() {


//     const [username, setUsername] = useState(''); 
  
//     useEffect(() => {
//       const savedUsername = localStorage.getItem("username");
//       if(savedUsername){
//         setUsername(savedUsername);
//       }
//        }, []);
  
//     useEffect(() => {
//         if(username){
//             localStorage.setItem("usename", username)
//         }
//     }, [username]);
  
//     return (
//       <div>
//         <h2>{username ? `Сәлем, ${username}!` : "Жүйеге кіріңіз"}</h2>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Атыңызды енгізіңіз"
//         />
//         <button onClick={() => setUsername("")}>🚪 Шығу</button>
//       </div>
//     );
//   }
  




// export default function VolumeControl() {
//   const [volume, setVolume] = useState("");

//   useEffect(() => {
//     const savedVolume = localStorage.getItem("volume");
//     if (savedVolume) {
//       setVolume(savedVolume);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("volume", volume.toString());
//   }, [volume]);

//   return (
//     <div>
//       <h2>Дыбыс деңгейі: {volume}</h2>
//       <input
//         type="range"
//         min="0"
//         max="100"
//         value={volume}
//         onChange={(e) => setVolume(e.target.value)}
//       />
//     </div>
//   );
// }
  






// export default function Timer() {
//   const [seconds, setSeconds] = useState<number>(0); 

//   useEffect(() => {
//     const savedTime = localStorage.getItem("seconds");
//     if (savedTime) {
//       setSeconds(Number(savedTime));
//     }
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("seconds", seconds.toString());
//   }, [seconds]);

//   return (
//     <div>
//       <h2>Таймер: {seconds} сек</h2>
//     </div>
//   );
// }
  





export default function CurrencyConverter() {
  const [currency, setCurrency] = useState("");

  useEffect(() => {
    const savedCurrency = localStorage.getItem("currency");
    if (savedCurrency) {
      setCurrency(savedCurrency);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  return (
    <div>
      <h2>Валюта таңдаңыз:</h2>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="KZT">KZT</option>
      </select>
      <p>Таңдалған валюта: {currency}</p>
    </div>
  );
}