// export default function App(){
//     const numbers = [1,2,3,4,5,6,7,8,9,10]

//     const nums = numbers.filter((num)=> num %2 ==1)

//     return(
//         <ul>
//             {nums.map((num, index) =>
//             <li key={index}>{index}</li>)}
//         </ul>
//     )
// }



import React, { useState } from "react";

export default function App() {
    const [tasks, setTasks] = useState(['sabaq oky', 'Mektepke bru', 'yi jumisin jasau'])

    return (
        <ul>
            {tasks.map ((task, index) =>
            <li key={index}> {task}</li>
            )}
        </ul>
    )
}