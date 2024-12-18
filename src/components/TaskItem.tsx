import { Check } from 'phosphor-react';

import type Task from '../task';
import DeleteButton from './DeleteButton';
import styles from './TaskItem.module.css';

interface TaskItemProps {
  task: Task;
  onCheckboxChange: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({
  task,
  onCheckboxChange,
  onDelete,
}: TaskItemProps) {
  const handleClickTask = () => {
    onCheckboxChange(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div
      className={`${styles.taskItem} ${task.done ? styles.done : styles.default}`}
    >
      <div className={styles.checkboxAndText} onClick={handleClickTask}>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={handleClickTask}
            className={styles.checkbox}
          />
          <Check className={styles.checkIcon} />
        </div>
        <p className={styles.taskText}>{task.text}</p>
      </div>
      <DeleteButton onClick={handleDelete} />
    </div>
  );
}
