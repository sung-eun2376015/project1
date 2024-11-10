import "./Editor.css"
import { useState,useRef } from "react"

const Editor=({onCreate})=>{
    const [content,setContent]=useState("");
    const contentRef=useRef();

    const onchangecontent=(e)=>{
        setContent(e.target.value);
    }

    const onkeydown=(e)=>{
        if (e.keyCode===13){
            onSubmit();
        }
    }

    const onSubmit=()=>{
        if (content==''){
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }
    
    return (
    <div className="Editor">
        <input onKeyDown={onkeydown}
        ref={contentRef}
        value={content}
        onChange={onchangecontent}
        placeholder="새로운 todo..."
        />
        <button onClick={onSubmit}>추가</button>
    </div>)
}

export default Editor;