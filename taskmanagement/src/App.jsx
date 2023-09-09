

import './App.css'
import TaskCreate from './components/TaskCreate'
import TaskList from './components/TaskList'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const createTask = (title, desc) => {
    if(title == '' || desc == '')
    {
      alert("Başlık ve içerik dolu olmalıdır.");
    }else{
      const createdTasks = [...tasks, {
        id: Math.round(Math.random()*999999),
        title,
        desc
      }]
      setTasks(createdTasks);
    }
  };

  const deleteTaskByID = (id) =>{
    const afterDeletedTasks = tasks.filter((task) => {
      return task.id !== id 
    })

    setTasks(afterDeletedTasks);
  };

  const editTaskByID = (id, utitle, udesc) => {
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
