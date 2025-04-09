



import '../index.css';

import { useState } from 'react';

const AddTask = () => {
  const [todoList, setTodoList] = useState<{id: number, taskName: string, completed: boolean}[]>([]);
    const [task, setTask] = useState('');




  const handleChange = (event:any) => {
    setTask(event.target.value);
  
  
  };
  

    const addTask = () => {
        const newTask = {
          id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
          taskName: task, 
          completed: false
        };
        task === null ? alert('Please enter a task') : null;
        const newTodoList = [...todoList, newTask];
        setTodoList(newTodoList);
      };
    

const removeTask = (id:number) => {
  
  const newTodoList = todoList.filter((task) => {
      return task.id !== id;
    });
    
    setTodoList(newTodoList);
  }


  const toggleCompletion = (id: number) => {
    setTodoList(todoList.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  



  return (
    <>
      <div className='AddTask'>
        <input onChange={handleChange}/>
  
        <button type="submit" onClick={addTask}>Add Task</button>
      </div>
  
      <div className='TaskList'>
        {todoList.map((task) => {
          return (
            <div key={task.id}>
              <p>{task.taskName}</p>
              <button onClick={() => removeTask(task.id)}>Delete</button>
              <button   style ={{ backgroundColor: task.completed ? 'green' : 'red' }}
             onClick={() => toggleCompletion(task.id)}>
  {task.completed ? '✔️' : 'Complete'}
</button>
            </div>
          );
        })}
      </div>
    </>
  );
}



export default AddTask;