import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const [course, setCourse] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Assignment");
  const [dueDate, setDueDate] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [estimatedHours, setEstimatedHours] = useState("");

  function addTask() {
    const newTask = {
      id: Date.now(),
      course: course,
      title: title,
      type: type,
      dueDate: dueDate,
      difficulty: difficulty,
      estimatedHours: estimatedHours,
    };

    setTasks([...tasks, newTask]);

    setCourse("");
    setTitle("");
    setType("Assignment");
    setDueDate("");
    setDifficulty("Easy");
    setEstimatedHours("");
  }

  return (
    <div className="app">
      <h1>Homework Helper Hub Lite</h1>

      <p>
        A simple study planner that helps students organize assignments,
        quizzes, exams, and projects.
      </p>

      <section className="card">
        <h2>Add a School Task</h2>

        <input
          placeholder="Course name"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        />

        <input
          placeholder="Task title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option>Assignment</option>
          <option>Quiz</option>
          <option>Exam</option>
          <option>Project</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />

        <select
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <input
          type="number"
          placeholder="Estimated study hours"
          value={estimatedHours}
          onChange={(event) => setEstimatedHours(event.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </section>

      <section className="card">
        <h2>Your Tasks</h2>

        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <strong>{task.course}</strong> - {task.title} | {task.type} | Due:{" "}
                {task.dueDate} | Difficulty: {task.difficulty} | Hours:{" "}
                {task.estimatedHours}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="card">
        <h2>Weekly Study Plan</h2>
        <p>Your study plan will appear here.</p>
      </section>
    </div>
  );
}

export default App;