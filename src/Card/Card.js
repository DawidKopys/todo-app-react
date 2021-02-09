import React, { useState, useEffect } from 'react';
import './_Card.scss';
import uuid from 'react-uuid';
import TaskInput from './../TaskInput/TaskInput';
import TaskList from './../TaskList/TaskList';
import Button from './../Button/Button';

const Card = () => {
  const [tasks, setTasks] = useState(getLocalStorage());
  const [showPopup, setShowPopup] = useState(false);

  function getLocalStorage() {
    let list = localStorage.getItem('tasks-list');
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  }

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

  useEffect(() => {
    localStorage.setItem('tasks-list', JSON.stringify(tasks));
  }, [tasks]);

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
