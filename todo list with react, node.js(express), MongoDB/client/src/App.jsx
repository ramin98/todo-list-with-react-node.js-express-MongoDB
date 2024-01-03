import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/getTasks');
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <div className="App container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6">TODO List</h1>
      <AddTask fetchTasks={fetchTasks} />
      <Tasks tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
}

export default App;
