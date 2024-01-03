import React from "react";
import axios from "axios";

function Tasks({ tasks, fetchTasks }) {
  const handleComplete = async (id) => {
    try {
      await axios.post("http://localhost:3001/completeTask", { id });
      fetchTasks();
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/deleteTask/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task._id}
          className="flex justify-between items-center p-2 my-2 border rounded"
        >
          <span
            className={`${
              task.isCompleted ? "line-through text-gray-500" : ""
            }`}
          >
            {task.text}
          </span>
          <div>
            {!task.isCompleted && (
              <button
                onClick={() => handleComplete(task._id)}
                className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-700"
              >
                Complete
              </button>
            )}
            <button
              className="px-4 mx-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={() => deleteTask(task._id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
