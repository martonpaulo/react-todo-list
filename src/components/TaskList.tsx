import { useState } from 'react';
import styles from './TaskList.module.css';
import TaskItem from './TaskItem';
import { ClipboardText } from 'phosphor-react';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

const initialTasks: Task[] = [
  {
    id: 1,
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    done: false,
  },
  {
    id: 2,
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    done: false,
  },
  { id: 3, title: 'Delete a task', done: false },
];

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const doneTasksLabel = () =>
    `${tasks.filter((task) => task.done).length} of ${tasks.length}`;

  const handleCheckboxChange = (id: number, done: boolean) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done } : task,
    );
    setTasks(updatedTasks);
    console.log(tasks);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.totalTasks}>
          <h2>Task List</h2>
          <p>{tasks.length}</p>
        </div>

        <div className={styles.doneTasks}>
          <h2>Done</h2>
          <p>{doneTasksLabel()}</p>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className={styles.emptyList}>
          <ClipboardText size={56} weight="thin" className={styles.icon} />
          <h3>You don't have any task yet</h3>
          <p>Create, mark as done, and delete tasks</p>
        </div>
      ) : (
        <div className={styles.list}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              done={task.done}
              onCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
      )}

      <button onClick={() => setTasks(initialTasks)}>Reset</button>
    </>
  );
}
