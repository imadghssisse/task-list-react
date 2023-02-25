import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { Task } from "../models/task";

interface props {
    task: Task;
    handelUpdate: (e: React.FormEvent, task: Task) => void;
}
const EditTask = ({task, handelUpdate}: props) => {
    return (
        <span
            className="cursor-pointer" 
            onClick={(e) => handelUpdate(e, task)}
        >
            <AiFillEdit />
        </span>
    )
}

export default EditTask;