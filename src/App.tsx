import React, { useState } from "react";

// export default function App() {
//     const [tasks, setTasks] = useState(['sabaq oky', 'Mektepke bru', 'yi jumisin jasau'])

//     return (
//         <ul>
//             {tasks.map ((task, index) =>
//             <li key={index}> {task}</li>
//             )}
//         </ul>
//     )
// }


// export default function App(){

//   const numbers = [1,2,3,4,5,6,7,8,9,10]
//   const [filter, setFilters] = useState([])

//   const filterNumbers = () =>
//     setFilters(numbers.filter((num)=> num%2==0 ))

//   return (
//     <div>
//       <h2>Numbers</h2>
//       <button onClick={filterNumbers}>Jup</button>


//       <ul>
//         {filter.map((num, index) => (
//           <li key={index}>{num}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// export default function App(){
//     const [tasks,setTasks] = useState([
//         'JS',
//         'CSS',
//         'HTML',
//         'REACT'
//     ])
//    function handleRemove(index){
//     setTasks(tasks.filter((task,i) => i !==index))
//    }

//     return (
//         <div>
//             <h1>Exercise</h1>
//             <ul>
//                 {tasks.map((task,index)=>
//                <li key={index}>{task} <button onClick={() => handleRemove(index)}>Delete</button></li> )}
//             </ul>
//         </div>
//     )
// }







export default function App() {
  const [tasks, setTasks] = useState([
    { text: 'үйды жинау', completed: false },
    { text: 'go to school', completed: false },
    { text: 'жаттыгу жасау', completed: false },
    { text: 'Homework', completed: false },
    { text: 'read book', completed: false }
  ]);
  
  const [filter, setFilter] = useState('all');

  const handleRemove = (index) => {
    setTasks(tasks.filter((num, i) => i !== index));
  };

  const handleToggleComplete = (index) => {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>Барлығы</button>
        <button onClick={() => setFilter('completed')}>Аяқталғандар</button>
        <button onClick={() => setFilter('incomplete')}>Аяқталмағандар</button>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={() => handleToggleComplete(index)}>
              {task.completed ? 'Қайтару' : 'Аяқтау'}
            </button>
            <button onClick={() => handleRemove(index)}>Өшіру</button>
          </li>
        ))}
      </ul>
    </div>
  );
}