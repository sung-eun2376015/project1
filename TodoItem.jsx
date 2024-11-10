import "./TodoItem.css";
import {memo} from "react"

const TodoItem=({id,isDone,content,date,onUpdate,onDelete
})=>{
    const onchangeCheckbox=()=>{
        onUpdate(id);
    }

    const onclickButton=()=>{
        onDelete(id);
    }

    return (
    <div className="TodoItem">
        <input onChange={onchangeCheckbox} readOnly checked={isDone} type="checkbox"/>
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onclickButton}>삭제</button>
    </div>)
}

export default memo(TodoItem)