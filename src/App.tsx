import './global.css';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.css';
import AddButton from './components/AddButton';
import TaskList from './components/TaskList';
import TextInput from './components/TextInput';
import rocketLogo from './rocket.svg';
import type Task from './task';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputText, setInputText] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask: Task = {
      id: uuidv4(),
      text: inputText,
      done: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInputText('');
  };

  const handleInputTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    event.target.setCustomValidity('');
    setInputText(event.target.value);
  };

  const handleCheckboxChange = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task,
    );

    setTasks(updatedTasks);
  };

  const handleDelete = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const isInputTextEmpty = inputText.trim() === '';

  return (
    <>
      <div className={styles.background} />

      <div className={styles.wrapper}>
        <div className={styles.title}>
          <img src={rocketLogo} alt="Logo" />
          <h1>
            <span>to</span>
            <span>do</span>
          </h1>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <TextInput
            name="inputTask"
            value={inputText}
            onChange={handleInputTextChange}
            required
          />
          <AddButton type="submit" disabled={isInputTextEmpty} />
        </form>

        <TaskList
          tasks={tasks}
          onCheckboxChange={handleCheckboxChange}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}
