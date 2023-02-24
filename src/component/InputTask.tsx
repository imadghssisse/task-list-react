import React from "react";

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handeleAdd: (e: React.FormEvent) => void;
}

const InputTask = ({todo, setTodo, handeleAdd}: props) => {
    return (
        <div>
            <label htmlFor="task">Add new task</label>
            <input
                type="text"
                name="task"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
            />
            <button type="button" onClick={(e) => handeleAdd(e)}>
                set task
            </button>
        </div>
    )
}

export default InputTask;