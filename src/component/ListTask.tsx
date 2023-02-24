import React from "react";
import { Task } from "../models/task";

interface props {
    tasks: Task[];
};

const ListTasks = ({tasks}: props) => {
    return (
        <div>
            <h2>To Do</h2>
            <ul>
                {
                    tasks.map(task => (
                        <li key={task.id}>{task.todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ListTasks;