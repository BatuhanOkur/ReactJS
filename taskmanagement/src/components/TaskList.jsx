import Task from './Task'

function TaskList({taskList, onDelete, onUpdate}) {
    return ( 
        <div className='taskListDiv'>
            {taskList.map((task, index) =>{
               return(
                <Task key={index} task={task} onDelete={onDelete} onUpdate={onUpdate}/>
               ); 
            })}
        </div>
     );
}

export default TaskList;