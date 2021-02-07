import React from 'react';
import './_TaskList.scss';
import TaskItem from './../TaskItem/TaskItem';

function TaskList({ tasks, deleteTask, toggleIsChecked }) {
  return (
    <div className='task-list-container'>
      <div className='task-list'>
        {tasks.map((task) => {
          const { id, text, isChecked } = task;
          return (
            <TaskItem
              key={id}
              id={id}
              isChecked={isChecked}
              toggleIsChecked={toggleIsChecked}
              deleteTask={deleteTask}
            >
              {text}
            </TaskItem>
          );
        })}
      </div>
    </div>
  );
}

export default TaskList;
