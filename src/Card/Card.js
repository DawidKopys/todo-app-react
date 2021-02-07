import React, { useState } from 'react';
import './_Card.scss';
import uuid from 'react-uuid';
import TaskInput from './../TaskInput/TaskInput';
import TaskList from './../TaskList/TaskList';
import Button from './../Button/Button';

const Card = () => {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      text: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe',
      isChecked: false,
    },
    { id: uuid(), text: 'task two', isChecked: false },
    { id: uuid(), text: 'task one', isChecked: false },
    { id: uuid(), text: 'task two', isChecked: false },
    { id: uuid(), text: 'task one', isChecked: false },
    { id: uuid(), text: 'task two', isChecked: false },
    { id: uuid(), text: 'task one', isChecked: false },
    { id: uuid(), text: 'task two', isChecked: false },
  ]);
  const [showPopup, setShowPopup] = useState(false);

  const addTask = (taskText) => {
    setTasks([...tasks, { id: uuid(), text: taskText, isChecked: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const deleteAll = () => {
    setTasks([]);
  };

  const deleteChecked = () => {
    setTasks(tasks.filter((task) => task.isChecked === false));
  };

  const toggleIsChecked = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isChecked: !task.isChecked };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className='center-card'>
      <TaskInput
        addTask={addTask}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleIsChecked={toggleIsChecked}
      />
      <div className='footer'>
        <Button
          className='button-card'
          id='button-delete-checked'
          title='Delete checked tasks'
          text='Delete Checked'
          onClick={() => {
            deleteChecked();
            setShowPopup(false);
          }}
        />
        <Button
          className='button-card'
          id='button-delete-all'
          title='Delete all tasks'
          text='Delete All'
          onClick={() => {
            deleteAll();
            setShowPopup(false);
          }}
        />
      </div>
    </div>
  );
};

export default Card;
