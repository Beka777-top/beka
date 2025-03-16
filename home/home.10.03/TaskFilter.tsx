import React from "react";

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Filter tasks"
    />
  );
};

export default TaskFilter;
