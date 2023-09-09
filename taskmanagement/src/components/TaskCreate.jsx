import { useState } from "react";

function TaskCreate({onCreate, task, editMode, onUpdate}) {
    const [title, setTitle] = useState(task ? task.title : '');
    const [desc, setDesc] = useState(task ? task.desc : '');

    const handleTitleChange = (event) =>{
        setTitle(event.target.value);
    }

    const handleDescChange = (event) =>{
        setDesc(event.target.value);       
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(editMode){
            onUpdate(task.id, title, desc);
        }else{
            onCreate(title, desc);            
        }
        setTitle('');
        setDesc('');        
    }

    return ( 
    <div>
        {
        editMode ? 
        <div className="taskUpdate">
            <h3>{task.id} numaralı görevi güncelleyin.</h3>
            <form className="taskForm">
                <label className="taskLabel">Başlığı güncelleyin</label>
                <input value={title} onChange={handleTitleChange} className="taskInput"/>
                <label className="taskLabel">Görevi güncelleyin</label>
                <textarea value={desc} onChange={handleDescChange} className="taskInput" rows={5}/>
                <button className="taskButton update" onClick={handleSubmit}>Düzenle</button>
            </form>
        </div>
        : 
            
        <div className="taskCreate">
            <h3>Görev ekleyiniz!</h3>
            <form className="taskForm">
                <label className="taskLabel">Başlık</label>
                <input value={title} onChange={handleTitleChange} className="taskInput"/>
                <label className="taskLabel">Görev Detayı</label>
                <textarea value={desc} onChange={handleDescChange} className="taskInput" rows={5}/>
                <button className="taskButton" onClick={handleSubmit}>Oluştur</button>
            </form>
        </div>
        }
    </div>
     );
}

export default TaskCreate;