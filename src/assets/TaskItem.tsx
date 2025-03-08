import React from 'react';

const TaskItem = ({ title, completed }) => {
  return (
    <div className="task-item">
      {completed ? <s>{title}</s> : <span>{title}</span>}
    </div>
  );
};

export default TaskItem;
