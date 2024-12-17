import { Trash } from 'phosphor-react';
import styles from './DeleteButton.module.css';

export default function DeleteButton({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.deleteButton} {...props}>
      <Trash size={14} weight="bold" />
    </button>
  );
}
