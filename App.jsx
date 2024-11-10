import Header from "./components/Header"
import Editor from "./components/Editor"
import List from "./components/List"
import './App.css'
import {useState,useRef, useReducer,useCallback} from "react"
//import TestComp from "./components/testcomp"

const mockdata=[
  {
    id:0,
    isDone:false,
    content:"리액트 공부",
    date:new Date().getTime(),
  },
  {
    id:1,
    isDone:false,
    content:"빨래하기",
    date:new Date().getTime(),
  },
  {
    id:2,
    isDone:false,
    content:"청소하기",
    date:new Date().getTime(),
  }
]
function reducer(state,action){
  switch(action.type){
    case "create":
      return [action.data,...state]
    case "upadate":
      return state.map((item)=>item.id===action.targetid?{...item,isDone:!item.isDone}:item)
    case "delete":
      return state.filter((item)=>item.id!==action.targetid)
    default:
      return state;
  }
}

function App() {
  const [todos,dispatch]=useReducer(reducer,mockdata);

  const idRef=useRef(0);

  const onCreate=useCallback((content)=>{
    dispatch({
      type:"create",
      data:{
        id:idRef.current++,
        isDone:false,
        content:content,
        date:new Date().getTime(),
      }
    })
  },[])

  const onUpdate=useCallback((targetid)=>{
    dispatch({
      type:"update",
      targetid:targetid
    })
  },[])


  const onDelete=useCallback((targetId)=>{
    dispatch({
      type:"delete",
      targetid:targetId
    })
  },[])

  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
