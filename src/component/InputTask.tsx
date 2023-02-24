import React from "react";

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handeleAdd: (e: React.FormEvent) => void;
}

const InputTask = ({todo, setTodo, handeleAdd}: props) => {
    return (
        <div>
            <h1 className="text-center">Add new task</h1>
            <div className="flex justify-center mt-1">
                <input
                    type="text"
                    name="task"
                    className="border border-2 border-bright-blue"
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                />
                <button type="button" className="ml-3" onClick={(e) => handeleAdd(e)}>
                    set task
                </button>
            </div>
        </div>
    )
}

export default InputTask;