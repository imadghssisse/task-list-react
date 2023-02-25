import React from "react";
import { Task } from "../models/task";

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handeleAdd: (e: React.FormEvent) => void;
    updateTodo: Task | undefined;
}

const InputTask = ({todo, setTodo, handeleAdd, updateTodo}: props) => {
    return (
        <div>
            <h1 className="text-center">Your Board of work</h1>
            <div className="flex justify-center mt-1">
                <input
                    type="text"
                    name="task"
                    className="border border-2 border-bright-blue"
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                />
                <button type="button" className="ml-3" onClick={(e) => handeleAdd(e)}>
                    {!updateTodo ? "Add" : "Update"}
                </button>
            </div>
        </div>
    )
}

export default InputTask;