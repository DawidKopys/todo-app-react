import React, { useState } from 'react';
import Button from '../Button/Button';
import './_TaskInput.scss';

const TaskInput = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    //todo:  add only if not empty, show popup else
    addTask(taskInput);
    setTaskInput('');
  };

  return (
    <div className='input-area'>
      <div id='task-input-container'>
        <label htmlFor='task-text' className='sr-only'>
          New task text:
        </label>
        <input
          type='text'
          id='task-input'
          name='task-text'
          placeholder='New Task'
          value={taskInput}
          onChange={(e) => {
            setTaskInput(e.target.value);
          }}
        ></input>
      </div>
      <Button
        className='button-card'
        id='button-add'
        title='Add task'
        text='Add'
        onClick={handleAddTask}
      />
    </div>
  );
};

export default TaskInput;
