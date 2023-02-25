import React, {useState} from 'react';
import InputTask from './component/InputTask';
import ListTasks from './component/ListTask';
import { Task } from './models/task';

function App() {
  const [todo, setTodo] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [update, setUpdate] = useState<boolean>(true);
  const [updateTodo, setUpdateTodo] = useState<Task>();

  const handeleAdd = async (e: React.FormEvent) => {
    e.preventDefault();    
    if(todo && !updateTodo) {
      setTasks([...tasks, {id: Date.now(), todo: todo, inProgress: false, isDone: false}]);
    } else if(todo && updateTodo) {
      await setUpdate(false);
      let newTasks = tasks
      await newTasks.map(item => {
        if(updateTodo.hasOwnProperty('id') && item.id === updateTodo.id) {
          item.todo = todo;
        }
      })       
      await setTasks(newTasks);
      await setUpdateTodo(undefined);
      await setUpdate(true);
    }
    await setTodo("");
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

  const handelUpdate = (e: React.FormEvent, task: Task) => {
    e.preventDefault();
    if(task) {
      setUpdateTodo(task);
      setTodo(task.todo);
    }
  }

  return (
    <div className="App">
        <InputTask todo={todo} setTodo={setTodo} handeleAdd={handeleAdd} updateTodo={updateTodo} />
        <div>
          {
            update == true ? <ListTasks tasks={tasks} changeStatus={changeStatus} handelUpdate={handelUpdate}/> : ''
          }
        </div>
    </div>
  );
}

export default App;
