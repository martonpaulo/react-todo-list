import styles from './TextInput.module.css';

export default function TextInput({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={styles.textInput}
      placeholder="Write a new task..."
      {...props}
    />
  );
}
