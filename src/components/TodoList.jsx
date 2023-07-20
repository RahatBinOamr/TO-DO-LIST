import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask(''); 
    }
  };

  const removeTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  return (
    <div style={{width:'600px',margin:'auto' , alignItems:'center' , justifyContent:'center'}}>
      <div className="container ">
      <h1 >To-Do List</h1>
      <div className="mb-3">
        <input type="text" className="form-control" value={task} onChange={handleInputChange} />
        <button className="btn btn-primary mt-2" onClick={addTask}>Add Task</button>
      </div>
      <ul className="list-group">
        {taskList.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {task}
            <button className="btn btn-danger" onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default TodoList;
