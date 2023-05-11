import { useState } from 'react';

type TaskFormProps = {
  onAddTask: (task: string) => void;
};

function TaskForm({ onAddTask }: TaskFormProps) {
  const [task, setTask] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={event => setTask(event.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
