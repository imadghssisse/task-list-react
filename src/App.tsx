import React, {useState} from 'react';
import InputTask from './component/InputTask';
import ListTasks from './component/ListTask';
import { Task } from './models/task';

function App() {
  const [todo, setTodo] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [update, setUpdate] = useState<boolean>(true);
  
  const handeleAdd = (e: React.FormEvent) => {
    e.preventDefault();    
    if(todo) {
      setTasks([...tasks, {id: Date.now(), todo: todo, inProgress: false, isDone: false}]);
      setTodo("");
    }
  }

  const changeStatus = async (e: React.FormEvent, task: Task) => {
    e.preventDefault();
    if(task) {
      await setUpdate(false);      
      let updateTasks = tasks;
      await updateTasks.map(item => {
        if(item.id === task.id) {
          item = task;
        }
      })
      await setTasks(updateTasks);
      await setUpdate(true);
    }
  }

  return (
    <div className="App">
        <InputTask todo={todo} setTodo={setTodo} handeleAdd={handeleAdd} />
        <div>
          {
            update == true ? <ListTasks tasks={tasks} changeStatus={changeStatus}/> : ''
          }
        </div>
    </div>
  );
}

export default App;
