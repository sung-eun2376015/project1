import "./List.css";
import TodoItem from "./TodoItem";
import {useState,useMemo} from 'react';

const List=({todos,onUpdate,onDelete})=>{
    const [search,setSearch]=useState("");

    const onchangeSearch=(e)=>{
        setSearch(e.target.value);
    }

    const getfiltered=()=>{
        if (search===""){
            return todos;
        }
        
        return todos.filter((todo)=>{
            todo.content.includes(search)
        })
    }

    const filteredtodos=getfiltered();


    const {totalCount,doneCount,notDoneCount}=
     useMemo(()=>{const totalCount=todos.length;
        const doneCount=todos.filter((todo)=>todo.isDone).length;
        const notDoneCount=totalCount-doneCount;

        return(
            totalCount,
            doneCount,
            notDoneCount
        )
    },[todos])

    
    return (
    <div className="List">
        <h4>Todo list🌱</h4>

        <div>
            <div>total:{totalCount}</div>
            <div>done:{doneCount}</div>
            <div>notDone:{notDoneCount}</div>
        </div>

        <input onChange={onchangeSearch}
        value={search}
        placeholder="검색어를 입력하세요"/>

        <div className="todos">
            {filteredtodos.map((todo)=>{
                return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
            })}
        </div>

    </div>)
}

export default List;