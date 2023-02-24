import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Task } from "../models/task";

interface props {
    task: Task;
    changeStatus: (e: React.FormEvent, task: Task) => void;
};

const SwitchTask = ({task, changeStatus}: props) => {    
    console.log(task);
    
    return (
        <div>
            {
                !task.isDone && <InProgressUp task={task} changeStatus={changeStatus}/>
            }
            {
                task.inProgress && <InProgressDown task={task} changeStatus={changeStatus}/>
            }
        </div>
    )
}

const InProgressUp = ({task, changeStatus}: props) => {
    const handelChange = (e: React.FormEvent, task: Task) => {
        e.preventDefault();
        if(task.inProgress) {
            task.isDone = true;
        } else {
            task.inProgress = true;
        }        
        changeStatus(e, task);
    }
    return (
        <span 
            className="absolute right-0 top-2/4 -translate-y-2/4 cursor-pointer"
            onClick={(e) => handelChange(e, task)}
        >
            <AiOutlineArrowRight />
        </span>
    )
}

const InProgressDown = ({task, changeStatus}: props) => {
    const handelChange = (e: React.FormEvent, task: Task) => {
        e.preventDefault();
        if(task.isDone) {
            task.isDone = false;
        } else {
            task.inProgress = false;
        }
        changeStatus(e, task);
    }

    return (
        <span 
            className="absolute right-0 top-2/4 -translate-y-2/4 cursor-pointer"
            onClick={(e) => handelChange(e, task)}
        >
            <AiOutlineArrowLeft />
        </span>
    )
}

export default SwitchTask;