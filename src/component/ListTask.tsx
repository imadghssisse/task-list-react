import React from "react";
import { Task } from "../models/task";

interface props {
    tasks: Task[];
};

const ListTasks = ({tasks}: props) => {

    const status = [
        {id: 1, label: "To do", inProgress: false, isDone: false},
        {id: 2, label: "InProgress", inProgress: true, isDone: false},
        {id: 3, label: "IsDone", inProgress: true, isDone: true}
    ];

    return (
        <div>
            {
                status.map(item => (
                    <div key={item.id}>
                        <h2>{item.label}</h2>
                        <ul>
                            {
                                tasks.map(task => {
                                    if(task.inProgress === item.inProgress && task.isDone === item.isDone) {
                                        return(
                                            <li key={task.id}> {task.todo} </li>
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