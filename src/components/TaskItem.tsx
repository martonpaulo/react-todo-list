import styles from './TaskItem.module.css';
import { useState } from 'react';
import DeleteButton from './DeleteButton';

interface TaskItemProps {
  id: number;
  title: string;
  done: boolean;
  onCheckboxChange: (id: number, done: boolean) => void;
}

export default function TaskItem({
  id,
  title,
  done,
  onCheckboxChange,
}: TaskItemProps) {
  const [taskDone, setTaskDone] = useState(done);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDone(event.target.checked);
    onCheckboxChange(id, taskDone);
  };

  return (
    <div
      className={`${styles.taskItem} ${taskDone ? styles.done : styles.default}`}
    >
      <input
        type="checkbox"
        checked={taskDone}
        onChange={handleCheckboxChange}
        className={styles.checkbox}
      />
      <p className={styles.taskTitle}>{title}</p>
      <DeleteButton />
    </div>
  );
}
