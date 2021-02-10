import React, { useRef, useState, useEffect } from 'react';
import './_TaskList.scss';
import TaskItem from './../TaskItem/TaskItem';

function isElementOverflown(element) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

function TaskList({ tasks, deleteTask, toggleIsChecked, editTaskText }) {
  const [isOverflown, setIsOverflown] = useState(false);
  const taskListRef = useRef();

  useEffect(() => {
    if (isElementOverflown(taskListRef.current)) {
      setIsOverflown(true);
    } else {
      setIsOverflown(false);
    }
  }, [tasks]);

  return (
    <div className='task-list-container'>
      <div
        className={`task-list${isOverflown ? ' narrow' : ''}`}
        ref={taskListRef}
      >
        {tasks.map((task) => {
          const { id, text, isChecked } = task;
          return (
            <TaskItem
              key={id}
              id={id}
              isChecked={isChecked}
              toggleIsChecked={toggleIsChecked}
              deleteTask={deleteTask}
              editTaskText={editTaskText}
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
