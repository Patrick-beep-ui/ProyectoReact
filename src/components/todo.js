import { useState } from "react"

export default function ToDo({item, onUpdate, onDelete}){
    const [isEdit, setIsEdit] = useState(false);

    function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);
    function handleSubmit(e){
            e.preventDefault();
    
        }
    
        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }

        function handleClickUpdateTodo(){
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return(
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
                <button className="button" onClick={handleClickUpdateTodo}>Actualizar</button>
            </form>
        );
    }

    function TodoElement(){
        return(
            <div className="todoElement">
            {item.title} 
            <button onClick={()=> setIsEdit(true)} className="btnEdit">Editar</button>
            <button onClick={(e)=>onDelete(item.id)}className="btnDel">Eliminar</button>
            </div>
        );
    }

    return <div className="todo">{isEdit ? <FormEdit/> : <TodoElement/>}</div>;
            
}