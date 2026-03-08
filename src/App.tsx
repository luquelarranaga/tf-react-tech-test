// src/App.tsx
// This is your starting point. Build out the UI here.
// You're welcome to split this into multiple components if you'd like!

import { useState, useEffect } from 'react';
import { Task, Priority } from './types';
import { getTasks, createTask, updateTask, deleteTask } from './api';
import SelectPriority from './SelectPriority';
import Filter from './Filter';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [priority, setPriority] = useState<Priority>("low")
  const [filter, setFilter] = useState("completed=false")

  // Fetch tasks on mount
  useEffect(() => {
    void (async () => {
      try {
        const data = await getTasks(filter);
        setTasks(data);
      } catch {
        setError('Failed to load tasks');
      } finally {
        setLoading(false);
      }
    })();
  }, [filter]);

  // TODO: Customise this — add priority, due dates, or anything else you like!
  const handleAddTask = async () => {
    if (!newTaskTitle.trim()) return;
    const task = await createTask({ title: newTaskTitle, completed: false, priority: priority });
    setTasks((prev) => [...prev, task]);
    setNewTaskTitle('');
    setPriority("low")
  };

  // TODO: Expand this if you add extra fields to update
  const handleToggleComplete = async (task: Task) => {
    const updated = await updateTask(task.id, { completed: !task.completed });
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  // TODO: Add a confirmation step, or an undo feature if you like!
  const handleDeleteTask = async (id: string) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h1>Task Manager</h1>

      {/* TODO: Improve this input — add priority, labels, due date, etc. */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add a new task..."
        />
        <SelectPriority priority={priority} setPriority={setPriority}/>
        <button onClick={handleAddTask}>Add</button>
        <Filter setFilter={setFilter}/>
      </div>

      {/* TODO: Style this list — make it your own! */}
      {tasks.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map((task) => (
            <li key={task.id} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none', flex: 1 }}>
                {task.title}
              </span>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none', flex: 1 }}>
                {task.priority}
              </span>
              <button onClick={() => handleToggleComplete(task)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
