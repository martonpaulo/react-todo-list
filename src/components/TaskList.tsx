import { ClipboardText } from 'phosphor-react';

import type Task from '../task';
import TaskItem from './TaskItem';
import styles from './TaskList.module.css';

interface TaskListProps {
  tasks: Task[];
  onCheckboxChange: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({
  tasks,
  onCheckboxChange,
  onDelete,
}: TaskListProps) {
  const doneTasksLabel = () =>
    `${tasks.filter((task) => task.done).length} of ${tasks.length}`;

  const handleCheckboxChange = (id: string) => {
    onCheckboxChange(id);
  };

  const handleDelete = (id: string) => {
    onDelete(id);
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
              task={task}
              onCheckboxChange={handleCheckboxChange}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </>
  );
}
