import { useState } from "react";
import TaskCreate from "./TaskCreate";
import { useContext } from 'react';
import TaskContext from '../context/TaskContext';

function Task({ task }) {
    const {editTaskByID, deleteTaskByID} = useContext(TaskContext);
    const [showEdit, setShowEdit] = useState(false);
    const handleClick = () => {
        deleteTaskByID(task.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleUpdate = (id, utitle, udesc) =>{
        setShowEdit(false);
        editTaskByID(id, utitle,udesc);
    }

    return ( 
        <div className="task-card">
            {showEdit ? 
            <>
            
                <TaskCreate task={task} editMode={showEdit} onUpdate={handleUpdate} />
            
            </> 
            
            : 
            <>
                <div className="card-header">
                    <h3 className="taskh4">{task.id} numaralı görev</h3>
                </div>
                <hr></hr>
                <div className="card-content">
                    <h4 className="taskh4">Görev:</h4>
                    <span>{task.title}</span>
                    <h4 className="taskh4">Yapılacaklar</h4>
                    <span>{task.desc}</span>
                </div>
                <div className="card-footer">
                    <button className="btnDelete" onClick={handleClick}>Sil</button>
                    <button className="btnUpdate" onClick={handleEditClick}>Güncelle</button>
                </div>
            </>
            }
        </div>        
     );
}

export default Task;
