import React, { useState } from 'react';
import './_TaskItem.scss';

const TaskItem = ({ id, children, isChecked, toggleIsChecked, deleteTask }) => {
  return (
    <div className={`task-item ${isChecked ? 'checked' : ''}`}>
      <button
        className='task-rectangle'
        title={`${isChecked ? 'Uncheck Task' : 'Check Task'}`}
        onClick={() => {
          toggleIsChecked(id);
        }}
      >
        <span className='sr-only'>{`${
          isChecked ? 'Uncheck Task' : 'Check Task'
        }`}</span>
      </button>
      <p className='task-text' contentEditable='false'>
        {children}
      </p>
      <button
        className='task-delete'
        title='Delete task'
        onClick={() => {
          deleteTask(id);
        }}
      >
        <span className='sr-only'>Delete Task</span>
      </button>
    </div>
  );
};

export default TaskItem;
