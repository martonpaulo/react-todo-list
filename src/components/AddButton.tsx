import { PlusCircle } from 'phosphor-react';

import styles from './AddButton.module.css';

export default function AddButton({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.addButton} {...props}>
      <p>Add</p>
      <PlusCircle size={20} />
    </button>
  );
}
