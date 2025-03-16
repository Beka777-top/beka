import { useState } from "react"
// export default function And(){
//     let test = true;

//     return (
//     <>
//         {test && <p>Welcome</p> || <p>Hello</p>}
//         </>
//     )
// }


// export default function And() {
//     let age = 15;

//     return (
//         <>
//             {age >= 18 && <p>you old</p> || <p>you a young</p>}
//         </>
//     )
// }


// export default function isAdmin(){
// const isAdmin = true;

// return(
//     <>
//     {isAdmin && <p>Сіз әкімшісіз</p> || <p>Сіз әкімші емессіз</p>}
//     </>
// )
// }



// export default function isSubscribed(){
//     const isSubscribed = true;

//     return(
//         <>
//         {isSubscribed && <p>Сіз Premium қолданушысыз</p> || <p>Сіз Premium қолданушы емессіз</p>}
//         </>
//     )
// }



// export default function isOnline(){
//     const isOnline = false;

//     return(
//         <>
//         {isOnline && <p>Сіз онлайнсыз</p> || <p>Сіз офлайнсыз</p>}
//         </>
//     )
// }



// export default function temperature(){
//     const temperature = 5;
    
//     return(
//         <>
//         {temperature > 30 && "Ыстық" || temperature >= 15 && "Жылы" || "Суық"}
//         </>

//     )
// }




// export default function DarkmodeAndWhite() {
//     const [isDark, setIsDark] = useState(false);

//     return (
//         <div style={{
//             background: isDark ? 'black' : 'white',
//             color: isDark ? 'white' : 'black',
//             height: '100vh',
//             width: '100vw',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//         }}>
//             <p>{isDark ? 'Black mode' : 'White mode'}</p>
//             <button onClick={() => setIsDark(!isDark)}>
//                 {isDark ? 'White mode' : 'Black mode'}
//             </button>
//         </div>
//     );
// }



// export default function ToggleText(){
//     const [show, setShow] = useState(false);

//     return(
//         <>
//         <button onClick={() => setShow(!show)}>
//             {show ? "Жасыру" : "Көбірек"}
//         </button>
//         {show && <p>It is add information</p > || <p> Ақпарат жасырылды!</p>}
//         </>
//     )
// }





interface Task {
    id: number;
    text: string;
    completed: boolean;
    isEditing: boolean;
}

export default function ToDoList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [text, setText] = useState("");
    const [editText, setEditText] = useState("");

    const addTask = () => {
        if (text.trim() !== "") {
            const newTask: Task = {
                id: Date.now(),
                text: text,
                completed: false,
                isEditing: false,
            };
            setTasks([...tasks, newTask]);
            setText("");
        }
    };

    const toggleComplete = (id: number) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };



    
    const toggleEditMode = (id: number) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, isEditing: !task.isEditing } : task
        ));
    };

    const editTask = (id: number) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, text: editText, isEditing: false } : task
        ));
        setEditText("");
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <div>
                <input 
                    type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder="Тапсырма қосу" 
                />
                <button onClick={addTask}>Қосу</button>
            </div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                        {task.isEditing ? (
                            <>
                                <input 
                                    type="text" 
                                    value={editText} 
                                    onChange={(e) => setEditText(e.target.value)} 
                                    placeholder="Тапсырманы өңдеу" 
                                />
                                <button onClick={() => editTask(task.id)}>Сақтау</button>
                            </>
                        
                    ) : (
                            <>
                                <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
                                <button onClick={() => toggleEditMode(task.id)}>Өңдеу</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}   