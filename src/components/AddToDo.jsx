import React, {useState} from "react";
function AddToDo(props){
    const[todoText, setTodoText] = useState("")

    function inputChange(event){
        let newTodo = event.target.value;
        setTodoText(newTodo)
    }
    return(
        <div className="w-800px">
            <input name="todos" type="text" placeholder="Enter the Name of Todo" value={todoText} onChange={inputChange} className="h-10 w-4/5 bg-white rounded-xl"/>
                <span>
                    <button className="bg-green-400 h-10 w-20 border-gray-600 rounded-xl m-2" onClick={()=>{
                        props.todoSave(todoText)
                        setTodoText("")}}>
                        Add</button>
                </span>
        </div>
    )
    
}
export default AddToDo;