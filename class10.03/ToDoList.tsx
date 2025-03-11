import React from "react";
import { useState } from "react";

// export default function ToDoList() {
//     const [tasks, setTasks] = useState([]);
//     const [text, setText] = useState("");

//     const addTask = () => {
//         if (text.trim() !== "") {
//             setTasks([...tasks, text]);
//             setText("");
//         }
//     };

//     return (
//         <div>
//             <h1>Task</h1>
//             <div>
//                 <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
//                 <button onClick={addTask}>Add</button>
//             </div>
//             <ul>
//                 {tasks.map((task, index) => (
//                     <li key={index}>{task}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }







// function Kalk(){

//     const [number, setNumber] = useState(0);

//     const ten = () => {
//         setNumber(number + 1);
//         if (number + 1 === 10) {
//             alert("Сіз 10-ға жеттіңіз");
//         }
//     };

//     const minus = () => {
//         setNumber(number - 1);
//         if (number - 1 < 0) {
//             alert("Сіз 0-ден кіші сан жаздыңыз");
//         }
//     };

//     return(
//         <div>
//             <h1>{number}</h1>  
//             <button onClick={ten}>+1</button>
//             <button onClick={minus}>-1</button>
//         </div>
//     )
// }
// export default Kalk;





import React, { useState } from "react";

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default function ColorSwitcher() {
    const [color, setColor] = useState(getRandomColor());
    const [history, setHistory] = useState<string[]>([]);

    const changeColor = () => {
        const newColor = getRandomColor();
        setColor(newColor);
        setHistory(prevHistory => {
            const updatedHistory = [newColor, ...prevHistory];
            if (updatedHistory.length > 5) {
                updatedHistory.pop();
            }
            return updatedHistory;
        });
    };

    return (
        <div style={{ backgroundColor: color, height: "100vh", padding: "20px" }}>
            <button onClick={changeColor}>Change Color</button>
            <h2>Color History</h2>
            <ul>
                {history.map((col, index) => (
                    <li key={index} style={{ color: col }}>{col}</li>
                ))}
            </ul>
        </div>
    );
}