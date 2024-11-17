import Header from "../Components/Header";
import Button from "../Components/Button";
import DiaryList from "../Components/DiaryList";

import {useState,useContext} from "react";
import { DiaryStateContext } from "../App";


const getMonthlyData=(pivotDate,data)=>{
    const beginTime=new Date(
        pivotDate.getFullYear(),pivotDate.getMonth(),1,0,0,0
    ).getTime();

    const endTime=new Date(
        pivotDate.getFullYear(),pivotDate.getMonth()+1,0,23,59,59
    ).getTime();

    return data.filter((item)=>beginTime<=item.createdDate && item.createdDate<=endTime)
}



const Home=()=>{
    const [pivotDate,setpivotDate]= useState(new Date());
    const data=useContext(DiaryStateContext);

    const monthlyData=getMonthlyData(pivotDate,data);


    return(
        <div>
            <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`} 
            leftChild={<Button onClick={()=>{setpivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth()-1))}} text="<"/>} 
            rightChild={<Button onClick={()=>{setpivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth()+1))}}text=">"/>}/>

            <DiaryList data={monthlyData}/>
        </div>
    )
}

export default Home;