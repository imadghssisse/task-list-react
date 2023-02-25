import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Task } from "../models/task";
import EditTask from "./EditTask";

interface props {
    task: Task;
    changeStatus: (e: React.FormEvent, task: Task) => void;
};

interface propsUpdate {
    handelUpdate: (e: React.FormEvent, task: Task) => void;
}

const SwitchTask = ({task, changeStatus, handelUpdate}: props & propsUpdate) => {        
    return (
        <div className="absolute right-0 top-2/4 -translate-y-2/4 w-20 flex justify-between mr-4">
            <EditTask task={task} handelUpdate={handelUpdate}/>
            {
                task.inProgress && <InProgressDown task={task} changeStatus={changeStatus}/>
            }
            {
                !task.isDone && <InProgressUp task={task} changeStatus={changeStatus}/>
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
            className="cursor-pointer"
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
            className="cursor-pointer"
            onClick={(e) => handelChange(e, task)}
        >
            <AiOutlineArrowLeft />
        </span>
    )
}

export default SwitchTask;