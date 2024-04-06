import React, {useState} from "react";
function AddToDo(props){
    const[todoText, setTodoText] = useState("")

    function inputChange(event){
        let newTodo = event.target.value;
        setTodoText(newTodo)
    }
    return(
        <>
            <input name="todos" type="text" placeholder="Enter the Name of Todo" value={todoText} onChange={inputChange}/>
                <span>
                    <button onClick={()=>{
                        props.todoSave(todoText)
                        setTodoText("")}}>
                        Add To-Do   
                    </button>
                </span>
        </>
    )
    
}
export default AddToDo;