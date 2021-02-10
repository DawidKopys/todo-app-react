import React, { useState } from 'react';
import './_TaskItem.scss';

const TaskItem = ({ id, children, isChecked, toggleIsChecked, deleteTask, editTaskText }) => {
  
  const handleBlur = (e) => {
    editTaskText(id, e.target.innerHTML);
  }

  return (
    <div className={`task-item${isChecked ? ' checked' : ''}`}>
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
      <p className='task-text' contentEditable={true} dangerouslySetInnerHTML={{__html: children}} onBlur={handleBlur} />
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
