import React,{useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

function Todos(props){
    const[taskDone, setTaskDone] = useState(false)

    function markAsDone(){
        setTaskDone(!taskDone)
    }
    return(
        <>
            <div>
                    <ul>
                        <li>
                        <span>
                            <button onClick={markAsDone} >{taskDone ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}</button>
                        </span>
                            <span style={taskDone ? {textDecoration:"line-through"}:{textDecoration:"none"}}>
                            {props.text}
                            </span>
                        <span>
                            <button onClick={()=>props.todoDelete(props.id)}><DeleteIcon /></button>
                        </span>
                        </li>
                    </ul>
            </div>
        </>
    )

}

export default Todos;