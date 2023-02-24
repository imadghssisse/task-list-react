import React, {useState} from 'react';
import InputTask from './component/InputTask';
import ListTasks from './component/ListTask';
import { Task } from './models/task';

function App() {
  const [todo, setTodo] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handeleAdd = (e: React.FormEvent) => {
    e.preventDefault();    
    if(todo) {
      setTasks([...tasks, {id: Date.now(), todo: todo, inProgress: false, isDone: false}]);
      setTodo("");
    }
  }

  return (
    <div className="App">
        <InputTask todo={todo} setTodo={setTodo} handeleAdd={handeleAdd} />
        <div>
          <ListTasks tasks={tasks} />
        </div>
    </div>
  );
}

export default App;
