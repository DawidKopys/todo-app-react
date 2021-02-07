import React, { useState } from 'react';
import Button from '../Button/Button';
import './_TaskInput.scss';

const TaskInput = ({ addTask, showPopup, setShowPopup }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    //todo:  add only if not empty, show popup else
    if (taskInput) {
      addTask(taskInput);
      setTaskInput('');
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
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
            setShowPopup(false);
          }}
        ></input>
        <p
          id='task-input-popup'
          className={showPopup === true ? 'show' : ''}
          onClick={() => setShowPopup(false)}
        >
          Task text can't be empty!
        </p>
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
