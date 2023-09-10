

import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import { useState,useEffect } from 'react'
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title, desc) => {
    if(title == '' || desc == '')
    {
      alert("Başlık ve içerik dolu olmalıdır.");
    }else{
      const response = await axios.post('http://localhost:3000/tasks', 
      {
        title,
        desc
      });
      console.log(response);
      const createdTasks = [...tasks, response.data]
      setTasks(createdTasks);
    }
  };

  const fetchTask = async () =>{
    const response = await axios.get('http://localhost:3000/tasks');
    setTasks(response.data);
  }

  useEffect(() =>{
    fetchTask();    
  },[])

  const deleteTaskByID = async (id) =>{
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeletedTasks = tasks.filter((task) => {
      return task.id !== id 
    })

    setTasks(afterDeletedTasks);
  };

  const editTaskByID = async (id, utitle, udesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`,
    {
      title:utitle,
      desc:udesc
    });
    
    const updatedTasks = tasks.map((task) => {
      if(task.id == id){
        return {id, title: utitle, desc: udesc};
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (    
    <>
      <div className='app'>
        <TaskCreate onCreate={createTask}/>
        <h1>Görevler</h1>
        <TaskList taskList={tasks} onDelete={deleteTaskByID} onUpdate={editTaskByID}/>
      </div>
    </>
  )
}

export default App
