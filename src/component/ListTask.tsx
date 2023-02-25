import React from "react";
import { Task } from "../models/task";
import SwitchTask from "./SwitchTask";

interface props {
    tasks: Task[];
    changeStatus: (e: React.FormEvent, task: Task) => void;
    handelUpdate : (e: React.FormEvent, task: Task) => void;
};

const ListTasks = ({tasks, changeStatus, handelUpdate}: props) => {

    const status = [
        {id: 1, label: "To do", inProgress: false, isDone: false},
        {id: 2, label: "InProgress", inProgress: true, isDone: false},
        {id: 3, label: "IsDone", inProgress: true, isDone: true}
    ];

    return (
        <div className="flex justify-around my-8 h-screen">
            {
                status.map((item, key) => (
                    <div className={"w-4/12 border-0" + (key + 1 < status.length ? " border-r-2" : "")} key={item.id}>
                        <h2 className="text-center">{item.label}</h2>
                        <ul>
                            {
                                tasks.map(task => {
                                    if(task.inProgress === item.inProgress && task.isDone === item.isDone) {
                                        return(
                                            <li className="p-4 my-4 border border-y-2 border-x-0 border-y-dark-blue relative" key={task.id}>
                                                {task.todo}
                                                <SwitchTask task={task} changeStatus={changeStatus} handelUpdate={handelUpdate}/>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default ListTasks;