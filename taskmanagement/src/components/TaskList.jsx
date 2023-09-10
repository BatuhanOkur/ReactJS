import Task from './Task';
import { useContext } from 'react';
import TaskContext from '../context/TaskContext';

function TaskList() {
    const {tasks} = useContext(TaskContext);
    return ( 
        <div className='taskListDiv'>
            {tasks.map((task, index) =>{
               return(
                <Task key={index} task={task} />
               ); 
            })}
        </div>
     );
}

export default TaskList;