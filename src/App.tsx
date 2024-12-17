import AddButton from './components/AddButton';
import TaskList from './components/TaskList';
import styles from './App.module.css';
import './global.css';
import TextInput from './components/TextInput';

export default function App() {
  return (
    <>
      <div className={styles.background} />

      <div className={styles.wrapper}>
        <div className={styles.title}>
          <img src="./rocket.svg" alt="Logo" />
          <h1>
            <span>to</span>
            <span>do</span>
          </h1>
        </div>

        <form className={styles.form}>
          <TextInput />
          <AddButton />
        </form>

        <TaskList />
      </div>
    </>
  );
}
