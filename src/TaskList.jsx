
import React from 'react';

function TaskList({ tasks, message }) {
  return (
    <div className="card p-4">

      <h3>My Task List</h3>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p className="task-message">
        {message}
      </p>

    </div>
  );
}

export default TaskList;
