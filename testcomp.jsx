import {useReducer} from "react";

//상태변화 코드의 분리 useReducer
function reducer(state,action){
    switch(action.type){ 
        case "increase":
            return state+action.data;
        case "decrease":
            return state-action.data;
        case "INIT":
            return 0;
        default:
            return state;
    }
}

function TestComp(){
    const [count,dispatch]=useReducer(reducer,0);

    return (
        <div>
            <h4>테스트</h4>
            <div>
                <bold>{count}</bold>
            </div>
            <div>
                <button onClick={()=>{dispatch({type:"increase",data:1})}}>+</button>
                <button onClick={()=>{dispatch({type:"decrease",data:1})}}>-</button>
                <button onClick={()=>dispatch({type:"INIT"})}>0으로 초기화</button>
            </div>
        </div>
    )
}

export default TestComp;